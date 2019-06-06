import React, { useState, useEffect } from "react"; // import hooks
import logo from "./logo.svg";
import "./App.css";

//
// prepare a custom hook
//
function useFetch(url, defaultResponse) {
  //
  // call useSate hook
  //
  // argument: initial state
  //
  // it return an array
  // destructing to data and setData
  //
  const [data, setData] = useState(defaultResponse);

  //
  // create an async funtion to fetch data
  //
  async function getDataFromAPI() {
    try {
      // using await to wait promise resolve
      const res = await fetch(url);
      // wait promise convert to json
      const data = await res.json();
      //
      // call hooks setData function to:
      // change state
      // rerender
      //
      setData({
        isLoading: false,
        data
      });
    } catch (e) {
      console.error(e);
      setData({
        isLoading: false,
        data: e
      });
    }
  }

  //
  // useEffect is similar to componentDidMount and componentDidUpdate
  // parameter:
  // 1) function to call
  // 2) array of values that the effect depends on
  //
  useEffect(() => {
    getDataFromAPI();
  }, []);

  //
  // custom hook return data
  //
  return data;
}

//
// app function is starting point
//
export default function App() {
  // prepare parameters
  const randomID = Math.floor(Math.random() * 10 + 1);
  const apiEndpoint = `https://reqres.in/api/users/${randomID}`;
  // call custom hook
  const userFetchResponse = useFetch(apiEndpoint, {
    isLoading: true,
    data: null
  });

  // returun loading message if not ready
  if (!userFetchResponse.data || userFetchResponse.isLoading) {
    return "Loading...";
  }

  // get data from custom hook and return jsx
  const { first_name, last_name, avatar } = userFetchResponse.data.data;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h3>
            Name: {first_name} {last_name}
          </h3>
          <div>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </header>
    </div>
  );
}

import React, { useState, useEffect } from "react";
//import the store
import { StoreWeatherContext } from "../store";

const Main = () => {
  //grant access to the data inside our context provider
  const { state, dispatch } = React.useContext(StoreWeatherContext);

  const [city, setCity] = useState("");
  const [conditions, setConditions] = useState("");

  //action
  //  const fetchWeather = async (city) => {
  //     const data = await fetch(`http://api.apixu.com/v1/current.json?key=<YOUR_APIXU_KEY>=${city}`);
  //     const dataJSON = await data.json();

  //     // ____ FIXES NOT IN THE CODE REVIEW
  //     //------------ if there is a bad request this next line of code will return true
  //     //------------ since the json object will contain a property called error
  //     console.log(dataJSON.hasOwnProperty("error"));

  //     //return the action dispatch
  //      return dispatch({
  //          type: "FETCH_DATA",
  //          payload: dataJSON
  //      });

  //   }

  const getWeatherInfo = e => {
    e.preventDefault();

    console.log("==================  get weather info, city: ", city);

    // ____ FIXES NOT IN THE CODE REVIEW
    if (city === "" || city === undefined) {
      console.log("nothing to look for");
    } else {
      console.log("================== call get weather info, city: ", city);
      // fetchWeather(city).then( res => {
      //     console.log("Fetched results");
      //     setConditions(true);

      // }).catch( err => {
      //     console.log(err);
      // });
    }
  };

  return (
    <>
      <form onSubmit={getWeatherInfo}>
        <div className="control">
          <input
            type="text"
            name="name"
            placeholder="City to check weather, Ex. Paris"
            onChange={e => setCity(e.target.value)}
          />
        </div>

        <input type="submit" value="Check Weather" />
      </form>
    </>
  );
};

export default Main;

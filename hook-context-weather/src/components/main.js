import React, { useState, useEffect } from "react";
//import the store
import { StoreWeatherContext } from "../store";

const Main = () => {
  //grant access to the data inside our context provider
  const { state, dispatch } = React.useContext(StoreWeatherContext);

  // local state city
  const [city, setCity] = useState("");

  // local state condition
  const [conditions, setConditions] = useState("");

  //action, using async/await, return promise
  const fetchWeather = async city => {
    const data = await fetch(
      `http://api.apixu.com/v1/current.json?key=<key>&q=${city}`
    );
    const dataJSON = await data.json();

    console.log(dataJSON.hasOwnProperty("error"));

    //return the action dispatch
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON
    });
  };

  // get weather info function
  const getWeatherInfo = e => {
    e.preventDefault();

    if (city === "" || city === undefined) {
      console.log("nothing to look for");
    } else {
      fetchWeather(city)
        .then(res => {
          console.log("Fetched results");
          setConditions(true);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  // prepare result element
  const weatherConditions = conditions;
  let elem = "";

  if (weatherConditions && state.weatherData.hasOwnProperty("location")) {
    elem = (
      <div className="details">
        <h2>
          {state.weatherData.location.name}{" "}
          <span>{state.weatherData.location.country}</span>{" "}
        </h2>
        <p>{state.weatherData.location.localtime}</p>

        <div className="current">
          <p>{state.weatherData.current.temp_c}°C</p>
          <img src={state.weatherData.current.condition.icon} />
        </div>
        <div>
          <p>{state.weatherData.current.condition.text}</p>
        </div>
      </div>
    );
  } else {
    elem = (
      <div>
        <p>There is nothing to search for</p>
      </div>
    );
  }

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

      {elem}
    </>
  );
};

export default Main;

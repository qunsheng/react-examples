import React from "react";
//reducer, prepared for useReducer
import { weatherReducer } from "./reducers/weatherReducer";

//
//create the store context
//
// Context provides a way to pass data through the component tree
// without having to pass props down manually at every level.
//
// The context can be multiple
//
export const StoreWeatherContext = React.createContext();

//initial state, prepaerd for useReducer
const initialState = {
  weatherData: {}
};

//props will give us access to the rest of the components
export const StoreProvider = props => {
  //add the reducer
  //hook returns the state and dispatch with the action
  const [state, dispatch] = React.useReducer(weatherReducer, initialState);
  const value = { state, dispatch };

  //return the Provider with the value from the reducer
  return (
    <StoreWeatherContext.Provider value={value}>
      {props.children}
    </StoreWeatherContext.Provider>
  );
};

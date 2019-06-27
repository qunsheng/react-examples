import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Store from "./Store";

import Fruit from "./Fruit";
import Vegetable from "./Vegetable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> React Hooks + Context API = Global State Pattern </h1>
      </header>

      <Store>
        <Fruit />
        <Vegetable />
      </Store>
    </div>
  );
}

export default App;

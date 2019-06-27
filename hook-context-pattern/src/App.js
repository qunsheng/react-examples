import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Store from "./Store";

import Fruit from "./Fruit";
import Vegetable from "./Vegetable";

function App() {
  const [fruit, setFruit] = useState("Aaple");
  const [vegetable, setVegetable] = useState("Tomato");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> React Hooks In Context </h1>
      </header>

      <Store>
        <Fruit />
        <Vegetable />
      </Store>
    </div>
  );
}

export default App;

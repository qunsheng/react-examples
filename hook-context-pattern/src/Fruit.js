import React, { useState, useContext } from "react";

import { FruitContext } from "./Store";

const Fruit = () => {
  const [fruit, setFruit] = useContext(FruitContext);
  return (
    <>
      <h2> Today's Fruit is {fruit} </h2>

      <button onClick={() => setFruit("Orange")}>Set Fruit to Orange</button>
    </>
  );
};

export default Fruit;

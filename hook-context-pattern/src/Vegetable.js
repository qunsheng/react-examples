import React, { useContext } from "react";
import { VegetableContext } from "./Store";

const Vegetable = () => {
  const [vegetable, setVegetable] = useContext(VegetableContext);
  return (
    <>
      <h2> Today's Vegetable is {vegetable} </h2>
      <button onClick={() => setVegetable("Brocoli")}>
        Set Vegetable to Brocoli
      </button>
    </>
  );
};

export default Vegetable;

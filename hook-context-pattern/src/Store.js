import React, { useState } from "react";

export const FruitContext = React.createContext("Aaple");
export const VegetableContext = React.createContext("Tomato");

function Store({ children }) {
  const [fruit, setFruit] = useState("Aaple");
  const [vegetable, setVegetable] = useState("Tomato");

  return (
    <FruitContext.Provider value={[fruit, setFruit]}>
      <VegetableContext.Provider value={[vegetable, setVegetable]}>
        {children}
      </VegetableContext.Provider>
    </FruitContext.Provider>
  );
}

export default Store;

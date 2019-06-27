import React, { useReducer } from "react";
import postReducer from "./reducers/postReducer"; // reducer function

import AppContext from "./appcontext";

function Store({ children }) {
  // use useReducer hook to create redux like structure
  const [state, dispatch] = useReducer(postReducer, {
    items: [],
    item: {}
  });

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {children}
    </AppContext.Provider>
  );
}

export default Store;

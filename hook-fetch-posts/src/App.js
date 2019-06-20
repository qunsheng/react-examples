import React, { useReducer, useContext, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

import PostForm from "./components/Postform";
import Posts from "./components/Posts";

import postReducer from "./reducers/postReducer";
import AppContext from "./appcontext";

function App() {
  // console.log("============== postReducer: ", postReducer);
  // console.log("============== AppContext: ", AppContext);

  const [state, dispatch] = useReducer(postReducer, {
    items: [],
    item: {}
  });

  // console.log("============== state: ", state);
  // console.log("============== dispatch: ", dispatch);

  return (
    <div className="App">
      <AppContext.Provider value={dispatch}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <PostForm />
        <hr />
        <Posts />
      </AppContext.Provider>
    </div>
  );
}

export default App;

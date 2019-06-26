import React, { useReducer, useEffect, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";

import PostForm from "./components/Postform"; // post form conponent
import Posts from "./components/Posts"; // post component

import postReducer from "./reducers/postReducer"; // reducer function
import AppContext from "./appcontext"; // context created before

import { fetchPosts } from "./actions/postActions"; // fetch postion function

// custom hook
function useEffectOnce(cb) {
  //
  // useRef hook
  // parameter: initialValue
  //
  const didRun = useRef(false);

  useEffect(() => {
    if (!didRun.current) {
      cb();
      didRun.current = true;
    }
  });
}

function App() {
  // use useReducer hook to create redux like structure
  const [state, dispatch] = useReducer(postReducer, {
    items: [],
    item: {}
  });

  // fetchPost once app started
  useEffectOnce(() => {
    fetchPosts(dispatch);
  });

  // return jsx
  return (
    <div className="App">
      <AppContext.Provider value={dispatch}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <PostForm />
        <hr />
        <Posts postStateObj={state} />
      </AppContext.Provider>
    </div>
  );
}

export default App;

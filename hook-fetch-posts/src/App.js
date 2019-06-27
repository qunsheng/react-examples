import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Store from "./Store";

import PostForm from "./components/Postform"; // post form conponent
import Posts from "./components/Posts"; // post component

function App() {
  // return jsx
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>

      <Store>
        <PostForm />
        <Posts />
      </Store>
    </div>
  );
}

export default App;

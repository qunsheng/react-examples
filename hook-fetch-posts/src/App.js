import React from "react";
import "./App.css";

import Store from "./Store";

import PostForm from "./components/Postform"; // post form conponent
import Posts from "./components/Posts"; // post component

function App() {
  // return jsx
  return (
    <div className="App">
      <Store>
        <PostForm />
        <Posts />
      </Store>
    </div>
  );
}

export default App;

import React from "react";
import image from "./2293916.svg";
import Main from "./components/main";

function App() {
  return (
    <div className="container">
      <header>
        <h1>React Context With Hooks</h1>
      </header>
      <img className="hero" src={image} />

      <main>
        <Main />
      </main>
    </div>
  );
}
export default App;

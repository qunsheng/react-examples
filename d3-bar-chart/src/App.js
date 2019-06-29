import React from "react";
import BarChart from "./components/BarChart";

function App() {
  return (
    <div className="App">
      <h1>D3 Bar Chart</h1>
      <BarChart id="barchart" data={[12, 6, 6, 7, 10]} />
    </div>
  );
}

export default App;

import React from "react";
import CurrencyConvertor from "./CurrencyConvertor";
import Counter from "./Counter";
import Welcome from "./Welcome";
import SyntheticClick from "./SyntheticClick";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>React Event Examples</h1>
      <Counter />
      <Welcome />
      <SyntheticClick />
      <CurrencyConvertor />
    </div>
  );
}

export default App;

import React from "react";
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  return (
    <div className="App">
      <div>Counter {counter}</div>
    </div>
  );
}

export default App;

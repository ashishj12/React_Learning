import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    } else {
      console.log("Counter cannot go above 20");
    }
  };
  const deleteValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      console.log("Counter cannot go below 0");
    }
  };
  return (
    <>
      <h1>Hello From React Side</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={addValue}>Increment</button>
      <button onClick={deleteValue}>Decrement</button>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Card from "../components/Card";

//create state to manage data between child to parent component

const [name, setName] = useState("");

function App() {
  return(
    <div>
      <Card name={name} setName={setName} />
    </div>
  )
}

export default App;

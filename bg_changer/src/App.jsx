import { useState } from "react";
import "./App.css"; 

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <div className="button-container">
        <div className="button-wrapper">
          <button
            onClick={() => setColor("red")}
            className="button"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="button"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="button"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("purple")}
            className="button"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

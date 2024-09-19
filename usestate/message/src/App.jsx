import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  return (
    <>
      <div>
        <input
          id="message"
          type="text"
          value={message}
          placeholder="Enter Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <p>
          <strong>{message}</strong>
        </p>
      </div>
    </>
  );
}

export default App;

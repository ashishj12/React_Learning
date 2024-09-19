import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  return (
    <>
      <div>
        <input
          type="text"
          value={message}
          placeholder="Enter a message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <input
          type="button"
          value="Add"
          onClick={(e) => {
            setMessageList([
              ...messageList,
              {
                id: messageList.length + 1,
                message: message,
              },
            ]);
            setMessage(""); 
          }}
        />
        <ul>
          {messageList.map((m) => (
            <li key={m.id}>{m.message}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

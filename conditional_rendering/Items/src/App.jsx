import React from "react";
import "./App.css";
import Item from "./components/Item";
Item

function App() {

  return (
    <>
      <div>
        <h1>Best Games</h1>
        <ul>
          <Item isPacked={true} name="Black Myth Wukong" />
          <Item isPacked={true} name="Elden Ring" />
          <Item isPacked={false} name="Red Dead Redemption" />
        </ul>
      </div>
    </>
  );
}

export default App;

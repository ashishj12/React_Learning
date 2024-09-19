import React from "react";
import "./App.css";
import shawshank from "../assets/Movie1.jpg"
import shutter from "../assets/Movie2.jpg"
import GOT from "../assets/Movie3.jpg"
import Movie from "../components/Movie";

function App() {
  return (
    <>
      <div>
        <Movie name="Shawshank Redemptation" img ={shawshank} style={{"border-radius":"10px"}}/>
        <Movie name = "Shutter Island" img = {shutter} style={{"border-radius":"10px"}}/>
        <Movie name = "GOT" img = {GOT} style={{"border-radius":"10px"}}/>
      </div>
    </>
  );
}

export default App;

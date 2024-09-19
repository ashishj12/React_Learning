import React from "react";
import "./Movie.css";

const Movie = (props) => {
  return (
    <div className="movie-container" style={props.style}>
      <p id="movie-name">{props.name}</p>
      <img id="movie-img" src={props.img} alt={props.name}></img>
    </div>
  );
};

export default Movie;

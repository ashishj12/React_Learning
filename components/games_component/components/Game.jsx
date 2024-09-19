import React from "react";
import "./Game.css";

const UserCard = (props) => {
  return (
    <div className="game-container" style={props.style}>
      <p id="game-name">{props.name}</p>
      <img id="game-img" src={props.image} alt={props.name}></img>
      <p id="game-desc">{props.desc}</p>
    </div>
  );
};

export default UserCard;

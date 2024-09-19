import React from "react";

function Item({ name, isGame }) {
  let gameContent = name;
  if (isGame) {
    gameContent = name;
  }
  return <li className="item">{gameContent}</li>;
}

export default Item;

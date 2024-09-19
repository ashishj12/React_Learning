import React from "react";

const Card = (props) => {
  return (
    <div>
      <input type="text" onChange={(e) => props.setName(e.target.value)} />
      <p>Value inside child component in usestate</p>
    
    </div>
  );
};

export default Card;

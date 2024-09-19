import React from 'react'
import batman1 from '../assets/batman1.jpg'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style} >
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={props.image} alt={props.name}></img>
      <p id='user-desc'>{props.desc}</p> 
    </div>
  )
}

export default UserCard

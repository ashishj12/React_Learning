import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-items container">
        <div className="logo">
          <a href="/">
            <h1>GAME APP</h1>
          </a>
        </div>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/games">Games</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

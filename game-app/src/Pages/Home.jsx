import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="banner-container">
        <div className="banner">
          <h2>Welcome to the Game List</h2>
          <Link to="/games">
            <div className="view-btn">View Games</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

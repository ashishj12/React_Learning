import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className="title">
        <h1>About</h1>
      </div>
      <div className="about-container">
        <p>This app give a list of games fetched from an external API.</p>
      </div>
    </div>
  );
};

export default About;

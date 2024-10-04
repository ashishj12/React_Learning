import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const GameDetails = () => {
  const [game, setGame] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchGameDetails = async () => {
      const response = await fetch(
        `https://api.rawg.io/api/games/${id}?key=5f6a68bf68594cafbfc0f6cd75f6a02c`
      );
      const data = await response.json();
      setGame(data);
    };

    fetchGameDetails();
  }, [id]);

  return (
    <div className="container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className="title">
        <h1>{game.name}</h1>
      </div>
      <img src={game.background_image} alt={game.name} className="game-img" />
      <div className="game-details">
        <p>{game.description_raw}</p>
        <p>
          <strong>Released: </strong>
          {game.released}
        </p>
        <p>
          <strong>Rating: </strong>
          {game.rating}
        </p>
      </div>
    </div>
  );
};

export default GameDetails;

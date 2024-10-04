import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Games = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch(
        "https://api.rawg.io/api/games?key=5f6a68bf68594cafbfc0f6cd75f6a02c"
      );
      const data = await response.json();
      setGames(data.results);
    };

    fetchGames();
  }, []);

  return (
    <div className="container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className="title">
        <h1>Games</h1>
      </div>
      <div className="games-container">
        {games.map((game) => (
          <div key={game.id} className="game-card">
            <img
              src={game.background_image}
              alt={game.name}
              className="game-img"
            />
            <div className="game-info">
              <h2>{game.name}</h2>
              <Link to={`/games/${game.id}`}>
                <div className="btn">View Details</div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;

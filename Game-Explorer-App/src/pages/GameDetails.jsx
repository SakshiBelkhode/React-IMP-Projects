import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_KEY = "YOUR_API_KEY";

const GameDetails = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      const res = await fetch(
        `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
      );
      const data = await res.json();
      setGame(data);
    };

    fetchGame();
  }, [id]);

  if (!game) return <p>Loading...</p>;

  return (
    <div>
      <h2>{game.name}</h2>
      <img src={game.background_image} width="300" />
      <p>Rating: {game.rating}</p>
      <p>Released: {game.released}</p>
    </div>
  );
};

export default GameDetails;
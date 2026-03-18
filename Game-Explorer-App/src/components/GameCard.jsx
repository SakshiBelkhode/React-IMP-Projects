import { Link } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const GameCard = ({ game }) => {
  const { addToWishlist } = useContext(GameContext);

  return (
    <div>
      <img src={game.background_image} width="200" />
      <h3>{game.name}</h3>

      <Link to={`/game/${game.id}`}>Details</Link>

      <button onClick={() => addToWishlist(game)}>
        ❤️ Wishlist
      </button>
    </div>
  );
};

export default GameCard;
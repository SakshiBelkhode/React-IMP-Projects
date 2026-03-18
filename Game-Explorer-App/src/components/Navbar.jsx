import { useContext } from "react";
import { GameContext } from "../context/GameContext";

const Navbar = () => {
  const { wishlist } = useContext(GameContext);

  return (
    <div>
      <h2>🎮 Game Explorer</h2>
      <p>Wishlist: {wishlist.length}</p>
    </div>
  );
};

export default Navbar;
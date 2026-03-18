import { useContext } from "react";
import { TravelContext } from "../context/TravelContext";

const Navbar = () => {
  const { favorites } = useContext(TravelContext);

  return (
    <div>
      <h2>🌍 Travel Explorer</h2>
      <p>Favorites: {favorites.length}</p>
    </div>
  );
};

export default Navbar;
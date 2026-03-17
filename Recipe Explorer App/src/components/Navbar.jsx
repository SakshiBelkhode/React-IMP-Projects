import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

const Navbar = () => {
  const { favorites } = useContext(RecipeContext);

  return (
    <div>
      <h2>🍽 Recipe Explorer</h2>
      <p>Favorites: {favorites.length}</p>
    </div>
  );
};

export default Navbar;
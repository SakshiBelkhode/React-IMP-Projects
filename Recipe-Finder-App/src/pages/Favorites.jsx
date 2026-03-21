import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

const Favorites = () => {
  const { favorites, removeFavorite } =
    useContext(RecipeContext);

  return (
    <div>
      <h2>⭐ Favorites</h2>

      {favorites.map((f) => (
        <div key={f.idMeal}>
          <h4>{f.strMeal}</h4>
          <button onClick={() => removeFavorite(f.idMeal)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
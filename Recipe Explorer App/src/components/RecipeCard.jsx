import { Link } from "react-router-dom";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

const RecipeCard = ({ recipe }) => {
  const { addToFavorites } = useContext(RecipeContext);

  return (
    <div>
      <img src={recipe.strMealThumb} width="200" />
      <h3>{recipe.strMeal}</h3>

      <Link to={`/recipe/${recipe.idMeal}`}>
        View Details
      </Link>

      <button onClick={() => addToFavorites(recipe)}>
        ❤️ Favorite
      </button>
    </div>
  );
};

export default RecipeCard;
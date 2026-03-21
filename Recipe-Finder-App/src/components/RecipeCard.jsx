import { Link } from "react-router-dom";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";

const RecipeCard = ({ recipe }) => {
  const { addFavorite } = useContext(RecipeContext);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        width: "200px",
      }}
    >
      <img src={recipe.strMealThumb} width="100%" />
      <h4>{recipe.strMeal}</h4>

      <Link to={`/recipe/${recipe.idMeal}`}>View</Link>

      <button onClick={() => addFavorite(recipe)}>
        ⭐ Add Favorite
      </button>
    </div>
  );
};

export default RecipeCard;
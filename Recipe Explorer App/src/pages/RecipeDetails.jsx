import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();

      setRecipe(data.meals[0]);
    };

    fetchDetails();
  }, [id]);

  if (!recipe) return <p>Loading...</p>;

  return (
    <div>
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} width="300" />

      <p>{recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeDetails;
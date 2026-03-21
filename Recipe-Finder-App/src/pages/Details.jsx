import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Details = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    )
      .then((res) => res.json())
      .then((data) => setRecipe(data.meals[0]));
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

export default Details;
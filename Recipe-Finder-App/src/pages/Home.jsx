import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("chicken");

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    )
      .then((res) => res.json())
      .then((data) => setRecipes(data.meals || []));
  }, [search]);

  return (
    <div>
      <input
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
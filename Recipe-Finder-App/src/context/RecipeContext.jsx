import { createContext, useState, useEffect } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites")) || [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (recipe) => {
    const exist = favorites.find((f) => f.idMeal === recipe.idMeal);
    if (!exist) {
      setFavorites([...favorites, recipe]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((f) => f.idMeal !== id));
  };

  return (
    <RecipeContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
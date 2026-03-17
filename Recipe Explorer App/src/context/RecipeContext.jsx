import { createContext, useState } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (recipe) => {
    setFavorites((prev) => [...prev, recipe]);
  };

  return (
    <RecipeContext.Provider value={{ favorites, addToFavorites }}>
      {children}
    </RecipeContext.Provider>
  );
};
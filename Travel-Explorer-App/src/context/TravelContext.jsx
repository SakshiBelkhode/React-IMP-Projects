import { createContext, useState } from "react";

export const TravelContext = createContext();

export const TravelProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (country) => {
    setFavorites((prev) => [...prev, country]);
  };

  return (
    <TravelContext.Provider value={{ favorites, addFavorite }}>
      {children}
    </TravelContext.Provider>
  );
};
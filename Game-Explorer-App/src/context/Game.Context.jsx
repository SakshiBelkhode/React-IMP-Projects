import { createContext, useState } from "react";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (game) => {
    setWishlist((prev) => [...prev, game]);
  };

  return (
    <GameContext.Provider value={{ wishlist, addToWishlist }}>
      {children}
    </GameContext.Provider>
  );
};
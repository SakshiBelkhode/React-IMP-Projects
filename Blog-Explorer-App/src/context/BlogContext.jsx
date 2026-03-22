import { createContext, useState, useEffect } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("likedPosts")) || [];
  });

  useEffect(() => {
    localStorage.setItem("likedPosts", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (post) => {
    const exist = favorites.find((p) => p.id === post.id);
    if (!exist) {
      setFavorites([...favorites, post]);
    }
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((p) => p.id !== id));
  };

  return (
    <BlogContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </BlogContext.Provider>
  );
};
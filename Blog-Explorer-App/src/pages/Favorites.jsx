import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const Favorites = () => {
  const { favorites, removeFavorite } =
    useContext(BlogContext);

  return (
    <div>
      <h2>❤️ Liked Posts</h2>

      {favorites.map((post) => (
        <div key={post.id}>
          <h4>{post.title}</h4>
          <button onClick={() => removeFavorite(post.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;
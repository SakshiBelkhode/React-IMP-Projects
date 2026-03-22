import { Link } from "react-router-dom";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";

const PostCard = ({ post }) => {
  const { addFavorite } = useContext(BlogContext);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        width: "250px",
      }}
    >
      <h4>{post.title.slice(0, 30)}...</h4>
      <p>{post.body.slice(0, 60)}...</p>

      <Link to={`/post/${post.id}`}>Read More</Link>

      <button onClick={() => addFavorite(post)}>
        ❤️ Like
      </button>
    </div>
  );
};

export default PostCard;
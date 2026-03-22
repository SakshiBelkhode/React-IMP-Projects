import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    )
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;
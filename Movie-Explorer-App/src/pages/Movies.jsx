import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const Movies = () => {

  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => setMovies(data));

  }, []);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (

    <div className="container">

      <h2>Movies</h2>

      <input
        type="text"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredMovies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}

    </div>

  );

};

export default Movies;
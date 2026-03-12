import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {

  return (

    <div className="card">

      <h3>{movie.title}</h3>

      <Link to={`/movies/${movie.id}`}>
        View Details
      </Link>

    </div>

  );

};

export default MovieCard;
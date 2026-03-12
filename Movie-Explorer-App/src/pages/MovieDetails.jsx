import { useParams } from "react-router-dom";

const MovieDetails = () => {

  const { id } = useParams();

  return (

    <div className="container">

      <h2>Movie ID: {id}</h2>

      <p>This page demonstrates dynamic routing.</p>

    </div>

  );

};

export default MovieDetails;
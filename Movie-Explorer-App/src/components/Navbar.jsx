import { Link } from "react-router-dom";
import "../styles/App.css";

const Navbar = () => {

  return (
    <nav className="navbar">

      <h2>Movie Explorer</h2>

      <div>

        <Link to="/">Home</Link>

        <Link to="/movies">Movies</Link>

      </div>

    </nav>
  );

};

export default Navbar;
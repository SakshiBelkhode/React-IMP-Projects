import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "10px" }}>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
    </div>
  );
};

export default Navbar;
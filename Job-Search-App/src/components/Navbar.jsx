import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "10px" }}>
      <Link to="/">Jobs</Link>
      <Link to="/saved">Saved Jobs</Link>
    </div>
  );
};

export default Navbar;
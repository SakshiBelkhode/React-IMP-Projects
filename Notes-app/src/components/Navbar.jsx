import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

const Navbar = () => {
  const { notes } = useContext(NotesContext);

  return (
    <div>
      <h2>📝 Notes App</h2>
      <p>Total Notes: {notes.length}</p>
    </div>
  );
};

export default Navbar;
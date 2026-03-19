import { Link } from "react-router-dom";
import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

const NoteCard = ({ note }) => {
  const { deleteNote } = useContext(NotesContext);

  return (
    <div>
      <h4>{note.title}</h4>
      <p>{note.content.slice(0, 50)}...</p>

      <Link to={`/note/${note.id}`}>View</Link>

      <button onClick={() => deleteNote(note.id)}>
        Delete
      </button>
    </div>
  );
};

export default NoteCard;
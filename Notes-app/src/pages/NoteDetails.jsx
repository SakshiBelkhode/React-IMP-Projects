import { useParams } from "react-router-dom";
import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

const NoteDetails = () => {
  const { id } = useParams();
  const { notes } = useContext(NotesContext);

  const note = notes.find((n) => n.id === Number(id));

  if (!note) return <p>Note not found</p>;

  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
};

export default NoteDetails;
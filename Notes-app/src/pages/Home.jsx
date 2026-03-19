import { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";
import NoteCard from "../components/NoteCard";

const Home = () => {
  const { notes, addNote } = useContext(NotesContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAdd = () => {
    if (!title || !content) return;

    addNote({
      id: Date.now(),
      title,
      content,
    });

    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h3>Add Note</h3>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>

      <h3>All Notes</h3>

      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};

export default Home;
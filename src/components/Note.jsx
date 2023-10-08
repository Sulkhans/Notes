import { useState } from "react";
import { useNotes } from "../context/Notes.context";

const Note = ({ viewNote, setViewNote, setMenuOn }) => {
  const { notes, setNotes } = useNotes();
  const [confirm, setConfirm] = useState(false);
  const handleDelete = () => {
    setNotes(notes.filter((note) => note.id !== viewNote.id));
    setViewNote({
      id: "",
      title: "",
      note: "",
      color: "",
      date: "",
    });
    setMenuOn(true);
  };

  return (
    <>
      <div className="note" style={{ backgroundColor: viewNote.color }}>
        <input value={viewNote.title} disabled />
        <textarea value={viewNote.note} disabled />
      </div>
      <div
        className="button-container flex"
        style={{ justifyContent: "center" }}
      >
        {confirm ? (
          <button style={{ color: "red" }} onClick={handleDelete}>
            Confirm
          </button>
        ) : (
          <button style={{ color: "red" }} onClick={() => setConfirm(true)}>
            Delete
          </button>
        )}
      </div>
    </>
  );
};

export default Note;

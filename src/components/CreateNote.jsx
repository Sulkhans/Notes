import { useState } from "react";
import { useNotes } from "../context/Notes.context";
import uuid from "react-uuid";

const CreateNote = ({ setMenuOn, setCreateNoteMode }) => {
  const [currentNote, setCurrentNote] = useState({
    id: uuid(),
    title: "",
    note: "",
    color: "#dce0d9",
    date: Date.now(),
  });
  const { title, note, color } = currentNote;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrentNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleColor = (event) => {
    setCurrentNote((prevNote) => ({
      ...prevNote,
      color: event.target.value,
    }));
  };

  const { notes, setNotes } = useNotes();

  const handleSave = () => {
    setNotes([...notes, currentNote]);
    setCreateNoteMode(false);
    setMenuOn(true);
  };

  const handleDiscard = () => {
    setCreateNoteMode(false);
    setMenuOn(true);
  };

  return (
    <>
      <div className="note" style={{ backgroundColor: color }}>
        <input
          type="text"
          placeholder="Title"
          maxLength={40}
          autoFocus
          name="title"
          value={title}
          onChange={handleChange}
        />
        <textarea
          placeholder="Note"
          maxLength={800}
          name="note"
          value={note}
          onChange={handleChange}
        />
      </div>
      <div className="button-container flex">
        <button disabled={!title} onClick={handleSave}>
          Save
        </button>
        <select onChange={handleColor}>
          <option value="#e0e0e0">Gray</option>
          <option value="#f87575">Red</option>
          <option value="#fcac5d">Orange</option>
          <option value="#fcf45d">Yellow</option>
          <option value="#a7c957">Green</option>
          <option value="#a2d2ff">Blue</option>
          <option value="#ffb5d7">Pink</option>
          <option value="#bdb2ff">Purple</option>
        </select>
        <button onClick={handleDiscard}>Discard</button>
      </div>
    </>
  );
};

export default CreateNote;

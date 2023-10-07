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
          <option value="#dce0d9">Gray</option>
          <option value="#ffadad">Red</option>
          <option value="#ffd6a5">Orange</option>
          <option value="#fdffb6">Yellow</option>
          <option value="#caffbf">Green</option>
          <option value="#a2d2ff">Blue</option>
          <option value="#ffc6ff">Pink</option>
        </select>
        <button onClick={handleDiscard}>Discard</button>
      </div>
    </>
  );
};

export default CreateNote;

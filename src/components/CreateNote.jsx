import { useState } from "react";

const CreateNote = () => {
  const [currentNote, setCurrentNote] = useState({
    title: "",
    note: "",
    color: "#dce0d9",
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
    </>
  );
};

export default CreateNote;

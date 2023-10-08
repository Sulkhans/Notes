import Pencil from "../assets/pencil.svg?react";
import { useNotes } from "../context/Notes.context";

const Menu = ({ menuOn, setCreateNoteMode, viewNote, setViewNote }) => {
  const handleCreateNoteMode = () => {
    setCreateNoteMode(true);
    setViewNote(false);
  };
  const { notes } = useNotes();

  return (
    <div
      className="menu"
      style={{
        width: menuOn ? "15rem" : "0",
        color: menuOn ? "black" : "transparent",
      }}
    >
      <div>
        <div className="menu-item flex" onClick={handleCreateNoteMode}>
          <Pencil className="icon" />
          <h3>Add a new note</h3>
        </div>
      </div>
      <div className="notes-list">
        {notes.map((note) => {
          const date = new Date(note.date)
            .toLocaleDateString(undefined, {
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })
            .replace(/\//g, ".");
          return (
            <div
              key={note.id}
              className="menu-item note-item flex"
              style={{
                backgroundColor: viewNote.id === note.id ? "#e0e0e0" : "",
              }}
              onClick={() => {
                setCreateNoteMode(false);
                setViewNote({
                  id: note.id,
                  title: note.title,
                  note: note.note,
                  color: note.color,
                  date: note.date,
                });
              }}
            >
              <div>
                <h4>
                  {note.title.length > 15
                    ? note.title.slice(0, 15) + "..."
                    : note.title}
                </h4>
                <h6>{date}</h6>
              </div>
              <span style={{ color: note.color }}>&#9679;</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;

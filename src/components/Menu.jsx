import Pencil from "../assets/pencil.svg?react";
import { useNotes } from "../context/Notes.context";

const Menu = ({ menuOn, setCreateNoteMode }) => {
  const handleCreateNoteMode = () => setCreateNoteMode(true);
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
            <div className="menu-item note-item flex" key={note.id}>
              <div>
                <h4>{note.title}</h4>
                <h5>{note.note}</h5>
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

import Pencil from "../assets/pencil.svg?react";

const Menu = ({ menuOn, setCreateNoteMode }) => {
  const handleCreateNoteMode = () => setCreateNoteMode(true);

  return (
    <div
      className="menu"
      style={{
        width: menuOn ? "15rem" : "0",
        color: menuOn ? "black" : "transparent",
      }}
    >
      <div>
        <div className="menu-item new flex" onClick={handleCreateNoteMode}>
          <Pencil className="icon" />
          <h4>Add a new note</h4>
        </div>
      </div>
    </div>
  );
};

export default Menu;

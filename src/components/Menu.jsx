const Menu = ({ menuOn, setCreateNoteMode }) => {
  const handleCreateNoteMode = () => setCreateNoteMode(true);

  return (
    <div className="menu" style={{ display: menuOn ? "block" : "none" }}>
      <div>
        <h4 className="new-note" onClick={handleCreateNoteMode}>
          New note
        </h4>
        <h4>note 1</h4>
      </div>
    </div>
  );
};

export default Menu;

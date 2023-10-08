import React, { useState, useEffect } from "react";
import CreateNote from "./CreateNote";
import Note from "./Note";

const Content = ({
  menuOn,
  setMenuOn,
  setCreateNoteMode,
  createNoteMode,
  viewNote,
  setViewNote,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main
      className="flex"
      style={{
        position: windowWidth > 500 ? "relative" : "unset",
        width: windowWidth > 500 && menuOn ? "calc(100vw - 15rem)" : "100vw",
      }}
    >
      {createNoteMode && (
        <CreateNote
          setMenuOn={setMenuOn}
          setCreateNoteMode={setCreateNoteMode}
        />
      )}
      {viewNote.id && (
        <Note
          viewNote={viewNote}
          setViewNote={setViewNote}
          setMenuOn={setMenuOn}
        />
      )}
    </main>
  );
};

export default Content;

import React, { useState, useEffect } from "react";
import CreateNote from "./CreateNote";

const Content = ({ menuOn, createNoteMode }) => {
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
      {createNoteMode && <CreateNote />}
    </main>
  );
};

export default Content;

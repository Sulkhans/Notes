import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";

const App = () => {
  const [menuOn, setMenuOn] = useState(false);
  const [createNoteMode, setCreateNoteMode] = useState(true);
  const [viewNote, setViewNote] = useState({
    id: "",
    title: "",
    note: "",
    color: "",
    date: "",
  });

  return (
    <div>
      <Header menuOn={menuOn} setMenuOn={setMenuOn} />
      <Menu
        menuOn={menuOn}
        setCreateNoteMode={setCreateNoteMode}
        viewNote={viewNote}
        setViewNote={setViewNote}
      />
      <Content
        menuOn={menuOn}
        setMenuOn={setMenuOn}
        setCreateNoteMode={setCreateNoteMode}
        createNoteMode={createNoteMode}
        viewNote={viewNote}
        setViewNote={setViewNote}
      />
    </div>
  );
};

export default App;

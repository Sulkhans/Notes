import { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";

const App = () => {
  const [menuOn, setMenuOn] = useState(false);
  const [createNoteMode, setCreateNoteMode] = useState(false);

  return (
    <div>
      <Header menuOn={menuOn} setMenuOn={setMenuOn} />
      <Menu menuOn={menuOn} setCreateNoteMode={setCreateNoteMode} />
      <Content menuOn={menuOn} createNoteMode={createNoteMode} />
    </div>
  );
};

export default App;

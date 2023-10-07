import Logo from "../assets/clip.svg?react";
import MenuIcon from "../assets/menu.svg?react";

const Header = ({ menuOn, setMenuOn }) => {
  const handleReload = () => window.location.reload();
  const handleMenu = () => setMenuOn(!menuOn);

  return (
    <header>
      <div className="flex pointer" onClick={handleReload}>
        <Logo className="logo" />
        <h1>Notes</h1>
      </div>
      <MenuIcon className="icon pointer" onClick={handleMenu} />
    </header>
  );
};

export default Header;

import Logo from "../assets/clip.svg?react";
import MenuIcon from "../assets/menu.svg?react";

const Header = ({ menuOn, setMenuOn }) => {
  const handleMenuClick = () => setMenuOn(!menuOn);
  return (
    <header>
      <div className="flex">
        <Logo className="logo" />
        <h1>Notes</h1>
      </div>
      <MenuIcon className="icon" onClick={handleMenuClick} />
    </header>
  );
};

export default Header;

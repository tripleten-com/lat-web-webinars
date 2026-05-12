import "./Header.css";
import Logo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar";

function Header(): React.JSX.Element {
  return (
    <div className="header">
      <Logo />
      <NavBar />
    </div>
  );
}

export default Header;

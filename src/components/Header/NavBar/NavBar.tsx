// import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  // const customClassName = ({ isActive }: { isActive: boolean }): string =>
  //   "menu__link" + (isActive ? " menu__link_active" : "");

  return (
    <nav className="menu">
      <a href="/" className="menu__link">
        Inicio
      </a>
      <a href="/countries" className="menu__link">
        Países
      </a>
    </nav>
  );
}

export default NavBar;

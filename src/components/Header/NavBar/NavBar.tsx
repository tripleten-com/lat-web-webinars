import { NavLink } from "react-router-dom";
import "./NavBar.css";
import LangButton from "../LangButton/LangButton";

function NavBar() {
  const customClassName = ({ isActive }: { isActive: boolean }): string =>
    "menu__link" + (isActive ? " menu__link_active" : "");

  return (
    <nav className="menu">
      <NavLink to="/" className={customClassName}>
        Inicio
      </NavLink>
      <NavLink to="/countries" className={customClassName}>
        Países
      </NavLink>
      <LangButton />
    </nav>
  );
}

export default NavBar;

import { NavLink } from "react-router-dom";
import "./NavBar.css";
import LangButton from "../LangButton/LangButton";
import { dictionary } from "../../../utils/dictionary";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { useContext } from "react";

function NavBar() {
  const context = useContext(LanguageContext);
  if (!context) return null;

  const { lang } = context;
  const t = dictionary[lang];

  const customClassName = ({ isActive }: { isActive: boolean }): string =>
    "menu__link" + (isActive ? " menu__link_active" : "");

  return (
    <nav className="menu">
      <NavLink to="/" className={customClassName}>
        {t.navHome}
      </NavLink>
      <NavLink to="/countries" className={customClassName}>
        {t.navCountries}
      </NavLink>
      <LangButton />
    </nav>
  );
}

export default NavBar;

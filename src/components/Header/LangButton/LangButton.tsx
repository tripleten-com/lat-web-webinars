import { useContext } from "react";
import "./LangButton.css";
import { LanguageContext } from "../../../contexts/LanguageContext";

export default function LangButton() {
  const context = useContext(LanguageContext);
  if (!context) return null;

  const { lang, setLang } = context;

  const toggleLanguage = () => setLang(lang === "es" ? "en" : "es");

  return (
    <button className="lang-button" onClick={toggleLanguage}>
      <span className="lang-button__icon">🌐</span> {lang.toUpperCase()}
    </button>
  );
}

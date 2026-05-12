import { Link } from "react-router-dom";
import "./Dashboard.css";
import { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import { dictionary } from "../../utils/dictionary";

export default function Dashboard() {
  const context = useContext(LanguageContext);

  if (!context) return null;

  const { lang } = context;
  const t = dictionary[lang];

  return (
    <div className="dashboard">
      <h1 className="dashboard__title">{t.welcomeTitle}</h1>
      <p className="dashboard__subtitle">{t.welcomeSub}</p>
      <Link to="/countries" className="dashboard__button">
        {t.exploreBtn}
      </Link>
    </div>
  );
}

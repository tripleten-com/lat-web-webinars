import { useContext } from "react";
import { Link } from "react-router-dom";
import "./CountryCard.css";
import type { Country } from "../../../types/types";
import { dictionary } from "../../../utils/dictionary";
import { LanguageContext } from "../../../contexts/LanguageContext";

interface CountryCardProps {
  country: Country;
}

function CountryCard({ country }: CountryCardProps) {
  const context = useContext(LanguageContext);

  if (!context) return null;

  const { lang } = context;
  const t = dictionary[lang];

  const countryName =
    lang === "es" ? country.translations.spa.common : country.name.common;

  return (
    <li className="country-card">
      <img
        src={country.flags.svg}
        alt={`${t.flagAlt} ${countryName}`}
        className="country-card__flag"
      />
      <div className="country-card__info">
        <h3 className="country-card__name">{countryName}</h3>

        <Link to={`/countries/${country.cca3}`} className="country-card__link">
          {t.details}
        </Link>
      </div>
    </li>
  );
}

export default CountryCard;

import { Link } from "react-router-dom";
import "./CountryCard.css";
import type { Country } from "../../../types/types";

interface CountryCardProps {
  country: Country;
}

function CountryCard({ country }: CountryCardProps): React.JSX.Element {
  return (
    <li className="country-card">
      <img
        src={country.flags.svg}
        alt={`Bandera de ${country.translations.spa.common}`}
        className="country-card__flag"
      />
      <div className="country-card__info">
        <h3 className="country-card__name">
          {country.translations.spa.common}
        </h3>

        <Link to={`/countries/${country.cca3}`} className="country-card__link">
          Ver detalles
        </Link>
      </div>
    </li>
  );
}

export default CountryCard;

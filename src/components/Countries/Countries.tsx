import { useState } from "react";
import "./Countries.css";
import CountryCard from "./CountryCard/CountryCard";
import type { Country } from "../../types/types";

function Countries(): React.JSX.Element {
  const [countries, setCountries] = useState<Country[]>([]);

  return (
    <div className="countries">
      <h2 className="countries__title">Explora los países del mundo</h2>
      <ul className="countries__list">
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </ul>
    </div>
  );
}

export default Countries;

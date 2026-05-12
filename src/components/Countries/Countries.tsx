import { useEffect, useState } from "react";
import "./Countries.css";
import CountryCard from "./CountryCard/CountryCard";
import type { Country } from "../../types/types";
import api from "../../utils/api";
import SearchBar from "./SearchBar/SearchBar";

function Countries(): React.JSX.Element {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countriesData = await api.getAllCountries();
        setCountries(countriesData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="countries">
      <h2 className="countries__title">Explora los países del mundo</h2>
      <SearchBar />
      {isLoading ? (
        <p className="loading">Cargando...</p>
      ) : (
        <ul className="countries__list">
          {countries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Countries;

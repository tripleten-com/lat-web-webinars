import { useContext, useEffect, useState } from "react";
import "./Countries.css";
import CountryCard from "./CountryCard/CountryCard";
import type { Country } from "../../types/types";
import api from "../../utils/api";
import SearchBar from "./SearchBar/SearchBar";
import { dictionary } from "../../utils/dictionary";
import { LanguageContext } from "../../contexts/LanguageContext";

function Countries() {
  const context = useContext(LanguageContext);
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

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

  if (!context) return null;

  const { lang } = context;
  const t = dictionary[lang];

  const filteredCountries = countries.filter((country) => {
    const countryName =
      lang === "es" ? country.translations.spa.common : country.name.common;
    return countryName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="countries">
      <h2 className="countries__title">{t.countriesTitle}</h2>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {isLoading ? (
        <p className="loading">{t.loading}</p>
      ) : (
        <ul className="countries__list">
          {filteredCountries.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Countries;

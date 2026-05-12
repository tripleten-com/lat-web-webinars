import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Country } from "../../types/types";
import "./CountryDetails.css";
import api from "../../utils/api";
import { dictionary } from "../../utils/dictionary";
import { LanguageContext } from "../../contexts/LanguageContext";

export default function CountryDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const context = useContext(LanguageContext);

  const [country, setCountry] = useState<Country | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchCountry = async () => {
      try {
        const countryData = await api.getCountryById(id);
        setCountry(countryData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountry();
  }, [id]);

  if (!context) return null;

  const { lang } = context;
  const t = dictionary[lang];

  if (isLoading) return <p className="loading">{t.loadingCountry}</p>;
  if (!country) return <p className="loading">{t.notFound}</p>;

  const countryName =
    lang === "es" ? country.translations.spa.common : country.name.common;

  return (
    <div className="country-details">
      <img
        src={country.flags.svg}
        alt={`${t.flagAlt} ${countryName}`}
        className="country-details__flag"
      />
      <h2>{countryName}</h2>
      <p>
        <strong>{t.capital}:</strong>{" "}
        {country.capital ? country.capital[0] : "N/A"}
      </p>
      <p>
        <strong>{t.population}:</strong> {country.population.toLocaleString()}
      </p>
      <p>
        <strong>{t.area}:</strong> {country.area.toLocaleString()} km²
      </p>
      <button onClick={() => navigate(-1)} className="back-button">
        {t.backBtn}
      </button>
    </div>
  );
}

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Country } from "../../types/types";
import "./CountryDetails.css";
import api from "../../utils/api";

export default function CountryDetails(): React.JSX.Element {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

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

  if (isLoading) return <p className="loading">Cargando datos del país...</p>;
  if (!country) return <p className="loading">País no encontrado.</p>;

  return (
    <div className="country-details">
      <img
        src={country.flags.svg}
        alt="Bandera"
        className="country-details__flag"
      />
      <h2>{country.translations.spa.common}</h2>
      <p>
        <strong>Capital:</strong> {country.capital ? country.capital[0] : "N/A"}
      </p>
      <p>
        <strong>Población:</strong> {country.population.toLocaleString("es-ES")}
      </p>
      <p>
        <strong>Superficie:</strong> {country.area.toLocaleString("es-ES")} km²
      </p>

      <button onClick={() => navigate(-1)} className="back-button">
        Volver a la lista
      </button>
    </div>
  );
}

import "./CountryDetails.css";

function CountryDetails(): React.JSX.Element {
  return (
    <div className="country-details">
      <h2>Detalles del país</h2>
      {/* <img
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
      </p> */}

      <button className="back-button">Volver a la lista</button>
    </div>
  );
}

export default CountryDetails;

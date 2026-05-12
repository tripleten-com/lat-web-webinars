import "./Dashboard.css";

function Dashboard(): React.JSX.Element {
  return (
    <div className="dashboard">
      <h1 className="dashboard__title">¡Bienvenido, Viajero!</h1>
      <p className="dashboard__subtitle">
        Descubre información detallada sobre todos los países del mundo en un
        solo lugar.
      </p>
      <a href="/countries" className="dashboard__button">
        Explorar Países
      </a>
    </div>
  );
}

export default Dashboard;

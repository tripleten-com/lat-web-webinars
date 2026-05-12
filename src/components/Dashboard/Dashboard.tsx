import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard(): React.JSX.Element {
  return (
    <div className="dashboard">
      <h1 className="dashboard__title">¡Bienvenido, Viajero!</h1>
      <p className="dashboard__subtitle">
        Descubre información detallada sobre todos los países del mundo en un
        solo lugar.
      </p>
      <Link to="/countries" className="dashboard__button">
        Explorar Países
      </Link>
    </div>
  );
}

export default Dashboard;

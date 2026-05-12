import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import Countries from "./Countries/Countries";
import CountryDetails from "./CountryDetails/CountryDetails";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:id" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Dashboard from "./Dashboard/Dashboard";
import Countries from "./Countries/Countries";
import CountryDetails from "./CountryDetails/CountryDetails";
import { useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

function App() {
  const [lang, setLang] = useState<"es" | "en">("es");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:id" element={<CountryDetails />} />
        </Routes>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;

import { createContext } from "react";

interface LanguageContextType {
  lang: "es" | "en";
  setLang: (lang: "es" | "en") => void;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);


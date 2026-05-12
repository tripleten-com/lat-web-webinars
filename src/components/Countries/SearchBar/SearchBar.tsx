import { useContext } from "react";
import { dictionary } from "../../../utils/dictionary";
import "./SearchBar.css";
import { LanguageContext } from "../../../contexts/LanguageContext";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
}

export default function SearchBar({
  searchQuery,
  setSearchQuery,
}: SearchBarProps) {
  const context = useContext(LanguageContext);

  if (!context) return null;

  const { lang } = context;
  const t = dictionary[lang];

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder={t.searchPlaceholder}
        className="search-bar__input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

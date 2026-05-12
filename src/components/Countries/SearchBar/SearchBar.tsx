import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar país..."
        className="search-bar__input"
      />
    </div>
  );
}

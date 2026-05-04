import Header from "./Header/Header";
import Main from "./Main/Main";
import type { JSX } from "react";

function App(): JSX.Element {
  return (
    <div className="page">
      <Header title="📚 Mi Biblioteca Personal" />
      <Main />
    </div>
  );
}

export default App;

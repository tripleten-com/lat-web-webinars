import Card from "./Card/Card";
import Popup from "./Popup/Popup";
import EditProfile from "./Popup/EditProfile/EditProfile";
import { useState } from "react";
import type { JSX } from "react";
import type { CardData } from "../../interfaces/CardData";
import type { ModalData } from "../../interfaces/ModalData";
import NewCard from "./Popup/NewCard/NewCard";

const cards: CardData[] = [
  {
    _id: "1",
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-lat/marquez.jpg",
  },
  {
    _id: "2",
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-lat/exupery.jpg",
  },
  {
    _id: "3",
    title: "Don Quijote",
    author: "Miguel de Cervantes",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-lat/cervantes.jpg",
  },
  {
    _id: "4",
    title: "La casa de los espíritus",
    author: "Isabel Allende",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-lat/allende.jpg",
  },
];

export default function Main(): JSX.Element {
  const [popup, setPopup] = useState<ModalData | null>(null);

  const newCardConfig: ModalData = {
    id: "add-popup",
    title: "Agregar Nuevo Libro",
    children: <NewCard />,
  };

  const editProfileConfig: ModalData = {
    id: "edit-popup",
    title: "Editar Perfil de Lectura",
    children: <EditProfile />,
  };

  function handleOpenPopup(popupConfig: ModalData) {
    setPopup(popupConfig);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">👤</div>
        <div className="profile__info">
          <div className="profile__text">
            <h2 className="profile__name">Ana Lectora</h2>
            <p className="profile__goal">Meta: Leer 12 libros este año</p>
          </div>
          <button
            type="button"
            className="profile__edit-button"
            aria-label="Editar perfil"
            onClick={() => handleOpenPopup(editProfileConfig)}
          >
            Editar Perfil
          </button>
        </div>
      </section>

      <section className="books">
        <div className="books__header">
          <h3 className="books__title">Mis Libros</h3>
          <button
            type="button"
            className="profile__add-button"
            aria-label="Agregar libro"
            onClick={() => handleOpenPopup(newCardConfig)}
          >
            + Agregar Libro
          </button>
        </div>
        <ul className="books__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              handleOpenPopup={handleOpenPopup}
            />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup
          id={popup.id}
          onClose={handleClosePopup}
          title={popup.title}
          isOpen={popup !== null}
        >
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

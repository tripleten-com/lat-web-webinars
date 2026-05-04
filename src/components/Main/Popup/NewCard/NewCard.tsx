import type { JSX } from "react";

export default function NewCard(): JSX.Element {
  return (
    <form className="popup__form" name="add-book" noValidate>
      <input
        type="text"
        id="book-title"
        name="book-title"
        className="popup__input"
        placeholder="Título del libro"
        required
        minLength={2}
        maxLength={50}
      />
      <span className="popup__error" id="book-title-error"></span>
      <input
        type="text"
        id="book-author"
        name="book-author"
        className="popup__input"
        placeholder="Autor del libro"
        required
        minLength={2}
        maxLength={40}
      />
      <span className="popup__error" id="book-author-error"></span>
      <input
        type="url"
        id="book-link"
        name="book-link"
        className="popup__input"
        placeholder="Enlace a la portada"
        required
      />
      <span className="popup__error" id="book-link-error"></span>
      <button type="submit" className="popup__button" disabled>
        Agregar a Mi Biblioteca
      </button>
    </form>
  );
}

import type { JSX } from "react";

export default function EditProfile(): JSX.Element {
  return (
    <form className="popup__form" name="edit-profile" noValidate>
      <input
        type="text"
        id="reader-name"
        name="reader-name"
        className="popup__input"
        placeholder="Tu nombre"
        required
        minLength={2}
        maxLength={30}
      />
      <span className="popup__error" id="reader-name-error"></span>
      <input
        type="text"
        id="reading-goal"
        name="reading-goal"
        className="popup__input"
        placeholder="Ej: Leer 12 libros este año"
        required
        minLength={5}
        maxLength={100}
      />
      <span className="popup__error" id="reading-goal-error"></span>
      <button type="submit" className="popup__button" disabled>
        Actualizar Perfil
      </button>
    </form>
  );
}

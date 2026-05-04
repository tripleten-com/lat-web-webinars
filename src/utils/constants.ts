import type { BookData, ValidationConfig } from "../types/types.js";

// Variables globales
export const initialBooks: BookData[] = [
  {
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-lat/marquez.jpg",
  },
  {
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-lat/exupery.jpg",
  },
  {
    title: "Don Quijote",
    author: "Miguel de Cervantes",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-lat/cervantes.jpg",
  },
  {
    title: "La casa de los espíritus",
    author: "Isabel Allende",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-lat/allende.jpg",
  },
];

export const defaultFormConfig: ValidationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

// index.js - Archivo principal de la aplicación
import { UserInfo } from "./components/UserInfo.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { setEventListeners } from "./functions/setEventListeners.js";

// Variables globales
const initialBooks = [
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

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const editForm = document.forms["edit-profile"];

// Elementos del perfil
const readerNameInput = editForm.querySelector('input[name="reader-name"]');
const readingGoalInput = editForm.querySelector('input[name="reading-goal"]');

// Lista de libros
const booksList = document.querySelector(".books__list");

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  goalSelector: ".profile__goal",
});

const editProfilePopup = new PopupWithForm("#edit-popup", (inputValues) => {
  userInfo.setUserInfo({
    name: inputValues["reader-name"],
    goal: inputValues["reading-goal"],
  });
  editProfilePopup.close();
});
editProfilePopup.setEventListeners();

const addBookPopup = new PopupWithForm("#add-popup", (inputValues) => {
  const newBook = createBook(
    inputValues["book-title"],
    inputValues["book-author"],
    inputValues["book-link"],
  );
  booksList.prepend(newBook);
  addBookPopup.close();
});
addBookPopup.setEventListeners();

const imagePopup = new PopupWithImage("#image-popup");
imagePopup.setEventListeners();

editButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  // Llenar el formulario con los datos actuales
  readerNameInput.value = userData.name;
  // Remover el "Meta: " del inicio para editar solo el contenido
  readingGoalInput.value = userData.goal.replace("Meta: ", "");
  editProfilePopup.open();
});

addButton.addEventListener("click", () => {
  addBookPopup.open();
});

// Función para crear una nueva tarjeta de libro (ya implementada)
function createBook(title, author, link) {
  const bookTemplate = `
    <li class="book">
      <img class="book__cover" src="${link}" alt="${title}" />
      <div class="book__info">
        <h4 class="book__title">${title}</h4>
        <p class="book__author">${author}</p>
      </div>
    </li>
  `;

  // Crear elemento temporal para convertir HTML string a elemento DOM
  const tempContainer = document.createElement("div");
  tempContainer.innerHTML = bookTemplate;
  const bookElement = tempContainer.firstElementChild;
  const coverImage = bookElement.querySelector(".book__cover");

  coverImage.addEventListener("click", () => {
    imagePopup.open({ title, link });
  });

  return bookElement;
}

// Inicialización cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
  // Seleccionar todos los formularios de la página
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  // Configurar cada formulario
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });

  initialBooks.forEach((book) => {
    const newBook = createBook(book.title, book.author, book.link);
    booksList.append(newBook);
  });
});

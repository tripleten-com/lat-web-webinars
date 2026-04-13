// index.js - Archivo principal de la aplicación

// Variables globales
import { closePopup, openPopup, setupAllPopups } from "./popup.js";
import { setEventListeners } from "./functions/setEventListeners.js";

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
const editPopup = document.querySelector("#edit-popup");
const addPopup = document.querySelector("#add-popup");

const editForm = document.forms["edit-profile"];
const addForm = document.forms["add-book"];

const imagePopup = document.querySelector("#image-popup");
const popupImage = imagePopup.querySelector(".popup__image");
const popupCaption = imagePopup.querySelector(".popup__caption");

// Elementos del perfil
const readerNameInput = editForm.querySelector('input[name="reader-name"]');
const readingGoalInput = editForm.querySelector('input[name="reading-goal"]');
const profileName = document.querySelector(".profile__name");
const profileGoal = document.querySelector(".profile__goal");

// Lista de libros
const booksList = document.querySelector(".books__list");

// Event listeners para abrir popups (ya implementados)
editButton.addEventListener("click", () => {
  // Llenar el formulario con los datos actuales
  readerNameInput.value = profileName.textContent;
  // Remover el "Meta: " del inicio para editar solo el contenido
  readingGoalInput.value = profileGoal.textContent.replace("Meta: ", "");
  openPopup(editPopup);
});

addButton.addEventListener("click", () => {
  addForm.reset();
  openPopup(addPopup);
});

// Event listener para el formulario de editar perfil
editForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Actualizar el perfil con los nuevos datos
  profileName.textContent = readerNameInput.value;
  // Agregar "Meta: " al inicio del valor ingresado
  profileGoal.textContent = "Meta: " + readingGoalInput.value;

  closePopup(editPopup);
});

// Event listener para el formulario de agregar libro (ya implementado)
addForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const bookTitleInput = addForm.querySelector('input[name="book-title"]');
  const bookAuthorInput = addForm.querySelector('input[name="book-author"]');
  const bookLinkInput = addForm.querySelector('input[name="book-link"]');

  const newBook = createBook(
    bookTitleInput.value,
    bookAuthorInput.value,
    bookLinkInput.value,
  );
  booksList.prepend(newBook);

  addForm.reset();
  closePopup(addPopup);
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
    popupImage.src = link;
    popupImage.alt = title;
    popupCaption.textContent = title;
    openPopup(imagePopup);
  });

  return bookElement;
}

// Inicialización cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
  // Configurar todos los popups
  setupAllPopups();

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

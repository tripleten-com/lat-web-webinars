// index.js - Archivo principal de la aplicación

// Variables globales (ya configuradas)
import { closePopup, openPopup, setupAllPopups } from './popup.js'
import { setEventListeners } from './functions/setEventListeners.js'

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const editPopup = document.querySelector("#edit-popup");
const addPopup = document.querySelector("#add-popup");

const editForm = document.forms["edit-profile"];
const addForm = document.forms["add-book"];

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

  const newBook = createBook(bookTitleInput.value, bookAuthorInput.value);
  booksList.prepend(newBook);

  addForm.reset();
  closePopup(addPopup);
});

// Función para crear una nueva tarjeta de libro (ya implementada)
function createBook(title, author) {
  const bookTemplate = `
    <li class="book">
      <div class="book__cover">📖</div>
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
    setEventListeners(formElement)
  });
});

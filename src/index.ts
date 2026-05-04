import { Book } from "./components/Book.js";
import { Section } from "./components/Section.js";
import { UserInfo } from "./components/UserInfo.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { FormValidator } from "./components/FormValidator.js";
import { defaultFormConfig, initialBooks } from "./utils/constants.js";
import type { BookData } from "./types/types.js";

const editButton = document.querySelector(
  ".profile__edit-button",
) as HTMLButtonElement;
const addButton = document.querySelector(
  ".profile__add-button",
) as HTMLButtonElement;
const editForm = document.querySelector(
  'form[name="edit-profile"]',
) as HTMLFormElement;
const bookForm = document.querySelector(
  'form[name="add-book"]',
) as HTMLFormElement;

// Elementos del perfil
const readerNameInput = editForm.querySelector(
  'input[name="reader-name"]',
) as HTMLInputElement;
const readingGoalInput = editForm.querySelector(
  'input[name="reading-goal"]',
) as HTMLInputElement;

// Lista de libros
const booksList = document.querySelector(".books__list");

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  goalSelector: ".profile__goal",
});

const createBook = (data: BookData): HTMLElement => {
  const book = new Book(data, "#book-template", (bookData) => {
    imagePopup.open(bookData);
  });
  return book.generateBook();
};

const bookSection = new Section<BookData>(
  {
    renderer: (data: BookData) => {
      bookSection.addItem(createBook(data));
    },
  },
  ".books__list",
);

const editProfilePopup = new PopupWithForm("#edit-popup", (inputValues) => {
  userInfo.setUserInfo({
    name: inputValues["reader-name"],
    goal: inputValues["reading-goal"],
  });
  editProfilePopup.close();
});
editProfilePopup.setEventListeners();

const addBookPopup = new PopupWithForm("#add-popup", (inputValues) => {
  const newBook = createBook({
    title: inputValues["book-title"],
    author: inputValues["book-author"],
    link: inputValues["book-link"],
  });
  bookSection.addItem(newBook);
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

  profileValidator.resetValidation();
  editProfilePopup.open();
});

addButton.addEventListener("click", () => {
  bookValidator.resetValidation();
  addBookPopup.open();
});

const profileValidator = new FormValidator(defaultFormConfig, editForm);
const bookValidator = new FormValidator(defaultFormConfig, bookForm);

profileValidator.enableValidation();
bookValidator.enableValidation();

// Inicialización cuando se carga la página
document.addEventListener("DOMContentLoaded", () => {
  bookSection.renderItems(initialBooks.reverse());
});

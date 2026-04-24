import { Post } from "./components/Post.js";
import { Section } from "./components/Section.js";
import { UserInfo } from "./components/UserInfo.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { FormValidator } from "./components/FormValidator.js";
import { defaultFormConfig } from "./utils/constants.js";
import { Api } from "./components/Api.js";
import type { PostData } from "./types/types.js";

const editButton = document.querySelector(
  ".profile__edit-button",
) as HTMLButtonElement;
const addButton = document.querySelector(
  ".profile__add-button",
) as HTMLButtonElement;
const editForm = document.querySelector(
  'form[name="edit-profile"]',
) as HTMLFormElement;
const postForm = document.querySelector(
  'form[name="add-post"]',
) as HTMLFormElement;

// Elementos del perfil
const nameInput = editForm.querySelector(
  'input[name="profile-name"]',
) as HTMLInputElement;
const usernameInput = editForm.querySelector(
  'input[name="profile-username"]',
) as HTMLInputElement;
const emailInput = editForm.querySelector(
  'input[name="profile-email"]',
) as HTMLInputElement;

const api = new Api("https://jsonplaceholder.typicode.com");

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  usernameSelector: ".profile__username",
  emailSelector: ".profile__email",
});

const createPost = (data: PostData): HTMLElement => {
  const post = new Post(data, "#post-template");
  return post.generatePost();
};

const postSection = new Section<PostData>(
  {
    renderer: (data: PostData) => {
      postSection.addItem(createPost(data));
    },
  },
  ".posts__list",
);

const editProfilePopup = new PopupWithForm(
  "#edit-popup",
  async (inputValues) => {
    try {
      const userData = await api.updateUserInfo({
        name: inputValues["profile-name"],
        username: inputValues["profile-username"],
        email: inputValues["profile-email"],
      });

      userInfo.setUserInfo(userData);

      editProfilePopup.close();
    } catch (err) {
      console.error("Error al actualizar perfil:", err);
    }
  },
);
editProfilePopup.setEventListeners();

const addPostPopup = new PopupWithForm("#add-popup", async (inputValues) => {
  try {
    const newPostData = await api.addPost({
      title: inputValues["post-title"],
      body: inputValues["post-body"],
    });
    const newPostElement = createPost(newPostData);
    postSection.addItem(newPostElement);
    addPostPopup.close();
  } catch (err) {
    console.error("Error al agregar post:", err);
  }
});
addPostPopup.setEventListeners();

editButton.addEventListener("click", () => {
  const userData = userInfo.getUserInfo();
  // Llenar el formulario con los datos actuales
  nameInput.value = userData.name;
  usernameInput.value = userData.username;
  emailInput.value = userData.email;

  profileValidator.resetValidation();
  editProfilePopup.open();
});

addButton.addEventListener("click", () => {
  postValidator.resetValidation();
  addPostPopup.open();
});

const profileValidator = new FormValidator(defaultFormConfig, editForm);
const postValidator = new FormValidator(defaultFormConfig, postForm);

profileValidator.enableValidation();
postValidator.enableValidation();

// Inicialización
const initApp = async () => {
  try {
    const [userData, posts] = await Promise.all([
      api.getUserInfo(),
      api.getInitialPosts(),
    ]);

    userInfo.setUserInfo(userData);
    postSection.renderItems(posts.reverse());
  } catch (err) {
    console.error("Error al cargar datos iniciales:", err);
  }
};

initApp();

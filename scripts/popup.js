// PASO 1: Verificar que se exporten correctamente todas las funciones
// PASO 2: Importar la funcion closePopupByOverlay
// PASO 3: Importar la funcion handleEscClose


export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscClose);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscClose);
}

export function setupPopupEventListeners(popup) {
  const closeButton = popup.querySelector(".popup__close");
  closeButton.addEventListener("click", () => {
    closePopup(popup);
  });

  popup.addEventListener("click", (event) => {
    closePopupByOverlay(event);
  });
}

export function setupAllPopups() {
  const popups = document.querySelectorAll(".popup");
  popups.forEach((popup) => {
    setupPopupEventListeners(popup);
  });
}

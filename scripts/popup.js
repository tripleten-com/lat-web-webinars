export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscClose);
}

export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscClose);

  if (popup.id === "image-popup") {
    const popupImage = popup.querySelector(".popup__image");
    const popupCaption = popup.querySelector(".popup__caption");

    popupImage.src = "";
    popupImage.alt = "";
    popupCaption.textContent = "";
  }
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

export function closePopupByOverlay(event) {
  if (event.target.classList.contains("popup")) {
    closePopup(event.target);
  }
}

export function handleEscClose(event) {
  if (event.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}

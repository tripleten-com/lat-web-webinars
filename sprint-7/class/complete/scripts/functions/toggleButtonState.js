const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("form__submit_disabled");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("form__submit_disabled");
    buttonElement.disabled = false;
  }
};

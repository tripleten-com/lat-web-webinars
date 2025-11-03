const hideInputError = (inputElement) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  if (formError) {
    inputElement.classList.remove("form__input_type_error");
    formError.classList.remove("form__input-error_active");
    formError.textContent = "";
  }
};

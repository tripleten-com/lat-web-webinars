const formElement = document.querySelector(".form");

const showInputError = (inputElement, errorMessage) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  if (formError) {
    inputElement.classList.add("form__input_type_error");
    formError.textContent = errorMessage;
    formError.classList.add("form__input-error_active");
  } else {
    console.error(
      `No se encontró el elemento de error para: ${inputElement.id}`
    );
  }
};

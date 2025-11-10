function showInputError(inputElement, errorMessage) {
  const formElement = document.forms[inputElement.form.name]
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__error_visible");
};
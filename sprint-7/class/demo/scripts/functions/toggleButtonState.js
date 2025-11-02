const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("form__submit_disabled");
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove("form__submit_disabled");
    buttonElement.disabled = false;
  }
};

const toggleButtonState = (inputList, buttonElement) => {
  // PASO 1: Verificar estado general del formulario
  // - Usar hasInvalidInput() para verificar si hay errores
  //
  // PASO 2: Habilitar o deshabilitar botón
  // - Si hasInvalidInput devuelve true:
  //   * buttonElement.classList.add("form__submit_disabled")
  //   * buttonElement.disabled = true
  // - Si todos son válidos:
  //   * buttonElement.classList.remove("form__submit_disabled")
  //   * buttonElement.disabled = false
};

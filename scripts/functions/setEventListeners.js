const setEventListeners = (formElement) => {
  // PASO 1: Obtener todos los inputs del formulario
  // - Usar Array.from(formElement.querySelectorAll(".form__input"))
  //
  // PASO 2: Obtener botón de envío
  // - Usar formElement.querySelector(".form__submit")
  //
  // PASO 3: Configurar evento para cada input
  // - Usar forEach() en inputList
  // - Agregar event listener 'input' a cada campo
  // - En el callback:
  //   - Validar input con input.validity.valid
  //   - Mostrar error si no es válido usando showInputError(input, input.validationMessage)
  //   - Ocultar error si es válido usando hideInputError(input)
  //   - Llamar toggleButtonState(inputList, buttonElement) para habilitar/deshabilitar el botón
};

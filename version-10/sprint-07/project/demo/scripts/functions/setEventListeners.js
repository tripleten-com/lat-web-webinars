// PASO 1: Importar la funcion toggleButtonState
// PASO 2: Importar la funcion showInputError
// PASO 3: Importar la funcion hideInputError


export const setEventListeners = (formElement) => {
  // PASO 4: Obtener todos los inputs del formulario
  // - Usar Array.from(formElement.querySelectorAll(".form__input"))
  //
  // PASO 5: Obtener botón de envío
  // - Usar formElement.querySelector(".form__submit")
  //
  // PASO 6: Configurar evento para cada input
  // - Usar forEach() en inputList
  // - Agregar event listener 'input' a cada campo
  // - En el callback:
  //   - Validar input con input.validity.valid
  //   - Mostrar error si no es válido usando showInputError(input, input.validationMessage)
  //   - Ocultar error si es válido usando hideInputError(input)
  //   - Llamar toggleButtonState(inputList, buttonElement) para habilitar/deshabilitar el botón
};



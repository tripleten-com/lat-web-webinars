const formElement = document.querySelector(".form");

const showInputError = (inputElement, errorMessage) => {
  // PASO 1: Encontrar el elemento de error
  // - Usar querySelector para encontrar el span de error
  // - Usar la convención: `.${inputElement.id}-error`
  //
  // PASO 2: Aplicar estilos de error al input
  // - Agregar clase "form__input_type_error" al inputElement
  //
  // PASO 3: Mostrar mensaje de error
  // - Asignar errorMessage al textContent del span
  // - Agregar clase "form__input-error_active" al span de error
};
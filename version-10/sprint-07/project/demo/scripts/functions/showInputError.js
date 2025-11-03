export function showInputError(inputElement, errorMessage) {
  // PASO 1: Obtener el formulario al que pertenece el input
  // - Usar document.forms y el nombre del formulario (inputElement.form.name)
  //
  // PASO 2: Seleccionar el elemento de error correspondiente al input
  // - Buscar con un selector dinámico basado en inputElement.name + "-error"
  //
  // PASO 3: Marcar el campo con estilo de error
  // - Agregar la clase "popup__input_type_error" al input
  //
  // PASO 4: Mostrar el mensaje de error
  // - Asignar errorMessage al contenido de errorElement.textContent
  //
  // PASO 5: Hacer visible el mensaje de error
  // - Agregar la clase "popup__error_visible" al errorElement
};
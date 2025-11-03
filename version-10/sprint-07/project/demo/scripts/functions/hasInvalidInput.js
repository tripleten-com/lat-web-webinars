export function hasInvalidInput(inputList) {
  // PASO 1: Recorrer todos los inputs del array
  // - Usar el método some() en inputList
  // - some() retorna true si AL MENOS UNO cumple la condición
  // - some() retorna false si TODOS no cumplen la condición
  // PASO 2: Verificar la condición para cada input
  // - Para cada inputElement, verificar si validity.valid === false
  // - Si encontramos uno inválido, retornamos true (hay errores)
  // - Si todos son válidos, retornamos false (no hay errores)
  // 💡 PISTA: Estructura básica
  // return inputList.some((inputElement) => {
  //   return !inputElement.validity.valid;
  // });
}

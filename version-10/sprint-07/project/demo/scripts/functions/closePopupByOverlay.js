export function closePopupByOverlay(event) {
  // PASO 1: Verificar si el clic fue en el overlay (fondo del popup)
  // - Usar event.target.classList.contains('popup') para verificar si se hizo clic en el overlay

  // PASO 2: Cerrar el popup
  // - Si se hizo clic en el overlay, llamar a closePopup(event.target)

  // NOTA: event.target es el elemento donde se hizo clic
  // Si tiene la clase 'popup', significa que se hizo clic en el overlay
  // Si se hace clic en el contenido (.popup__content), NO se cierra

  // 💡 CONTEXTO: Click fuera del formulario
  // - En el fondo oscuro del popup
  // - NO en el formulario en sí (mejor UX)
}
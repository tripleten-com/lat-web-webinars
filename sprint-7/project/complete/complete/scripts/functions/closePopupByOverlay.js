import { closePopup } from '../popup.js'

export function closePopupByOverlay(event) {
  if (event.target.classList.contains("popup")) {
    closePopup(event.target);
  }
}

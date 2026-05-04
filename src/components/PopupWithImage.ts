import { Popup } from "./Popup.js";

export interface BookPopupData {
  title: string;
  link: string;
}

export class PopupWithImage extends Popup {
  private popupImage: HTMLImageElement;
  private popupCaption: HTMLParagraphElement;

  constructor(popupSelector: string) {
    super(popupSelector);
    this.popupImage = this.popupElement.querySelector(
      ".popup__image",
    ) as HTMLImageElement;
    this.popupCaption = this.popupElement.querySelector(
      ".popup__caption",
    ) as HTMLParagraphElement;
  }

  open(data?: BookPopupData) {
    if (data) {
      const { title, link } = data;
      this.popupImage.src = link;
      this.popupImage.alt = title;
      this.popupCaption.textContent = title;
    }

    super.open();
  }
}

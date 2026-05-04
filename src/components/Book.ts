import type { BookData } from "../types/types.js";

export class Book {
  private title: string;
  private author: string;
  private link: string;
  private templateSelector: string;
  private handleBookClick: (data: { title: string; link: string }) => void;
  private element: HTMLElement | null = null;

  constructor(
    data: BookData,
    templateSelector: string,
    handleBookClick: (data: { title: string; link: string }) => void,
  ) {
    this.title = data.title;
    this.author = data.author;
    this.link = data.link;
    this.templateSelector = templateSelector;
    this.handleBookClick = handleBookClick;
  }

  private getTemplate(): HTMLElement {
    const bookElement = (
      document.querySelector(this.templateSelector) as HTMLTemplateElement
    ).content
      .querySelector(".book")!
      .cloneNode(true) as HTMLElement;

    return bookElement;
  }

  private setEventListeners(coverElement: HTMLImageElement) {
    coverElement.addEventListener("click", () => {
      this.handleBookClick({ title: this.title, link: this.link });
    });
  }

  generateBook(): HTMLElement {
    this.element = this.getTemplate();

    const titleElement = this.element.querySelector(
      ".book__title",
    ) as HTMLElement;
    const authorElement = this.element.querySelector(
      ".book__author",
    ) as HTMLElement;
    const coverElement = this.element.querySelector(
      ".book__cover",
    ) as HTMLImageElement;

    titleElement.textContent = this.title;
    authorElement.textContent = this.author;
    coverElement.src = this.link;
    coverElement.alt = this.title;
    this.setEventListeners(coverElement);

    return this.element;
  }
}

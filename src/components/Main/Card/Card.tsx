import type { CardData } from "../../../interfaces/CardData";
import type { ModalData } from "../../../interfaces/ModalData";
import type { JSX } from "react";
import ImagePopup from "../Popup/ImagePopup/ImagePopup";

interface CardProps {
  card: CardData;
  handleOpenPopup: (popupConfig: ModalData) => void;
}

export default function Card({
  card,
  handleOpenPopup,
}: CardProps): JSX.Element {
  const { title, author, link } = card;

  const imagePopupConfig: ModalData = {
    id: "image-popup",
    children: <ImagePopup card={card} />,
  };

  return (
    <li className="book">
      <img
        className="book__cover"
        src={link}
        alt={title}
        onClick={() => handleOpenPopup(imagePopupConfig)}
      />
      <div className="book__info">
        <h4 className="book__title">{title}</h4>
        <p className="book__author">{author}</p>
      </div>
    </li>
  );
}

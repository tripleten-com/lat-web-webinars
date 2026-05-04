import type { JSX } from "react";
import type { CardData } from "../../../../interfaces/CardData";

interface ImagePopupProps {
  card: CardData;
}

export default function ImagePopup({ card }: ImagePopupProps): JSX.Element {
  const { title, link } = card;
  return (
    <>
      <img className="popup__image" src={link} alt={title} />
      <p className="popup__caption">{title}</p>
    </>
  );
}

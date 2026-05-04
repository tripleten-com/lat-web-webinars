import type { CardData } from "../../../interfaces/CardData";
import type { JSX } from "react";

interface CardProps {
  card: CardData;
}

export default function Card({ card }: CardProps): JSX.Element {
  const { title, author, link } = card;

  return (
    <li className="book">
      <img className="book__cover" src={link} alt={title} />
      <div className="book__info">
        <h4 className="book__title">{title}</h4>
        <p className="book__author">{author}</p>
      </div>
    </li>
  );
}

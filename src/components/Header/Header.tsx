import type { JSX } from "react";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
    </header>
  );
}

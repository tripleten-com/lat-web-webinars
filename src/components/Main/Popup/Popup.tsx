import type { JSX } from "react";

interface PopupProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

export default function Popup({
  id,
  title,
  children,
  onClose,
  isOpen,
}: PopupProps): JSX.Element {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`} id={id}>
      <div className={`popup__content ${!title ? "popup__content_image" : ""}`}>
        <button
          type="button"
          className="popup__close"
          aria-label="Cerrar"
          onClick={onClose}
        >
          ×
        </button>
        {title && <h3 className="popup__title">{title}</h3>}
        {children}
      </div>
    </div>
  );
}

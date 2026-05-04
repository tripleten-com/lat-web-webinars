import type { JSX } from 'react';

export interface ModalData {
  id: string;
  title?: string;
  children: JSX.Element;
}
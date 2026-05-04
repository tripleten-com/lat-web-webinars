export interface ValidationConfig {
  inputSelector: string;
  submitButtonSelector: string;
  inactiveButtonClass: string;
  inputErrorClass: string;
  errorClass: string;
}

export interface BookData {
  title: string;
  author: string;
  link: string;
}

export interface UserData {
  name: string;
  username: string;
  email: string;
}

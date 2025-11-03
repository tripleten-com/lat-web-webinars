// ===================================================================
// FUNCIONES DE SOPORTE (YA IMPLEMENTADAS)
// ===================================================================

// Función para mensajes personalizados
const getCustomErrorMessage = (inputElement) => {
  const inputType = inputElement.type;
  const inputId = inputElement.id;
  const validity = inputElement.validity;

  if (validity.valueMissing) {
    switch (inputId) {
      case "name-input":
        return "Por favor, ingresa tu nombre completo";
      case "email-input":
        return "El correo electrónico es obligatorio";
      case "password-input":
        return "Debes crear una contraseña";
      case "phone-input":
        return "El número de teléfono es requerido";
      default:
        return "Este campo es obligatorio";
    }
  }

  if (validity.typeMismatch) {
    switch (inputType) {
      case "email":
        return "Por favor, ingresa un correo electrónico válido (ejemplo@correo.com)";
      case "tel":
        return "Ingresa un número de teléfono válido";
      default:
        return "El formato ingresado no es válido";
    }
  }

  if (validity.tooShort) {
    switch (inputId) {
      case "name-input":
        return "El nombre debe tener al menos 2 caracteres";
      case "password-input":
        return "La contraseña debe tener mínimo 8 caracteres";
      case "phone-input":
        return "El teléfono debe tener al menos 10 dígitos";
      default:
        return `Debe tener al menos ${inputElement.minLength} caracteres`;
    }
  }

  if (validity.tooLong) {
    return `No puede tener más de ${inputElement.maxLength} caracteres`;
  }

  return inputElement.validationMessage;
};

// Función para mostrar mensaje de éxito
const showSuccessMessage = () => {
  const successMessage = document.getElementById("success-message");
  successMessage.style.display = "block";

  successMessage.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });

  setTimeout(() => {
    successMessage.style.display = "none";
  }, 4000);
};

// ===================================================================
// INICIALIZACIÓN
// ===================================================================

document.addEventListener("DOMContentLoaded", () => {
  const formList = Array.from(document.querySelectorAll(".form"));

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();

      const inputList = Array.from(
        formElement.querySelectorAll(".form__input")
      );
      let formIsValid = true;

      inputList.forEach((inputElement) => {
        if (!inputElement.validity.valid) {
          formIsValid = false;
        }
      });

      if (formIsValid) {
        showSuccessMessage();
        formElement.reset();
      }
    });

    setEventListeners();
  });
});

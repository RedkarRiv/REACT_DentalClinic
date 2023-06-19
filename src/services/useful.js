export const CheckError = (name, value) => {
  switch (name) {
    case "email":
    case "e-mail":
    case "correo":
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
        return "El e-mail es incorrecto";
      }

      return "";

    case "password":
    case "contraseña":
      if (value.length < 8) {
        return "El password debe de tener 8 caracteres minimo";
      }
      return "";

    case "name":
      break;

    default:
      console.log("Unknown format");
  }
};

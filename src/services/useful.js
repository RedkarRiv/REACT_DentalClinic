export const CheckError = (name, value, password1) => {
  switch (name) {
    case "email":
    case "e-mail":
    case "correo":
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
        return "El formato de e-mail es incorrecto";
      }
      return "";

    case "password":
    case "contraseña":
      if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{4,}$/.test(value)) {
        return "El password no tiene el formato correcto.";
      }
      return "";
    case "doubleCheckPassword":
      if (value !== password1) {
        return "Las dos contraseñas tienen que ser iguales.";
      }
      return "";

    case "name":
      if (!/^([A-Z][a-z]{2,}(?: [A-Z][a-z]{2,})*)$/.test(value)) {
        return "El formato de nombre no es valido";
      }
      return "";

    case "surname":
      if (!/^([A-Z][a-zA-Z]{2,}(?: [A-Za-z]{2,})*)$/.test(value)) {
        return "El formato del apellido no es válido";
      }
      return "";

    case "phone":
      if (!/^(9\d{8}|[67]\d{8})$/.test(value)) {
        return "El formato del teléfono no es válido";
      }
      return "";

    case "dni":
      if (!/^\d{8}[A-Za-z]$/.test(value)) {
        return "El dni no es válido";
      }
      return "";
    case "cp":
      if (!/^\d{5,6}$/.test(value)) {
        return "El código postal no es válido";
      }
      break;

    default:
      console.log("Unknown format");
  }
};

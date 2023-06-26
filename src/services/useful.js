export const CheckError = (name, value) => {
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
      if (!/^(9\d{8,9}|[67]\d{8})$/.test(value)) {
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
      return "";
      case "birth_date":
        if ("2005-01-01" < value  > "1923-01-01") {
          console.log("Esto es el value de birthdate" + value.toString())

          return "La fecha no es válida";
        }
        break;

    default:
      console.log("Unknown format");
  }
};

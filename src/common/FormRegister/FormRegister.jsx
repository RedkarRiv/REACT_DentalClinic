import React, { useState, useEffect } from "react";
import { CheckError } from "../../services/useful";
import { loginMe, registerMe } from "../../services/apiCall";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../pages/userSlice";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
} from "mdb-react-ui-kit";
import "./FormRegister.css";

export const FormRegister = () => {
  const dispatch = useDispatch();

  const registerMeHandler = () => {
    console.log("Registro iniciado");
    registerMe(newCredentials)
      .then((resultado) => {
        console.log(resultado.data.id);
        if (resultado.data.id !== "undefined") {
          const instantLoginCredentials = {
            email: resultado.data.email,
            password: newCredentials.password,
          };
          loginMe(instantLoginCredentials)
            .then((resultado) => {
              console.log("Esto es el login correcto");
              let decoded = jwt_decode(resultado.data.token);

              let datosBackend = {
                token: resultado.data.token,
                user: decoded,
              };

              //Guardo en redux.....
              dispatch(login({ credentials: datosBackend }));

              setTimeout(() => {}, 1000);
            })
            .catch((error) => console.log(error));
        }

        setTimeout(() => {}, 1000);
      })
      .catch((error) => console.log(error));
  };

  // HOOKS Y HANDLERS PARA VALIDACION DE INPUTS DEL FORMULARIO
  const [newCredentials, setNewCredentials] = useState({
    email: "",
    password: "",
    name: "",
    surname: "",
    phone: "",
    dni: "",
    cp: "",
    birth_date: "",
    avatar:
      "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
  });

  const [newCredentialsError, setNewCredentialsError] = useState({
    emailError: "",
    passwordError: "",
    nameError: "",
    surnameError: "",
    phoneError: "",
    dniError: "",
    cpError: "",
    birth_dateError: "",
  });

  const InputHandler = (e) => {
    setNewCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const InputCheck = (e, password) => {
    let mensajeError = CheckError(e.target.name, e.target.value, password);

    setNewCredentialsError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: mensajeError,
    }));
  };
  return (
    <MDBContainer fluid className="registerCardFormBackground">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBCard className="my-4 p-3">
            <MDBRow className="g-0">
              <MDBCol md="12">
                <MDBCardBody className="text-black d-flex flex-column justify-content-center">
                  <MDBRow>
                    <MDBCol md="6">
                      <MDBInput
                        maxLength={20}
                        placeholder="Nombre"
                        wrapperClass="mb-4"
                        size="lg"
                        id="form1"
                        type="text"
                        name="name"
                        className={
                          newCredentialsError.nameError === ""
                            ? "textInput"
                            : " textInput errorInput"
                        }
                        onChange={(e) => InputHandler(e)}
                        onBlur={(e) => InputCheck(e)}
                      />
                    </MDBCol>

                    <MDBCol md="6">
                      <MDBInput
                        maxLength={20}
                        wrapperClass="mb-4"
                        placeholder="Apellidos"
                        size="lg"
                        id="form2"
                        type="text"
                        name="surname"
                        className={
                          newCredentialsError.surnameError === ""
                            ? "textInput"
                            : " textInput errorInput"
                        }
                        onChange={(e) => InputHandler(e)}
                        onBlur={(e) => InputCheck(e)}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="6">
                      <MDBInput
                        maxLength={20}
                        wrapperClass="mb-4"
                        placeholder="Email"
                        size="lg"
                        id="form3"
                        type="email"
                        name="email"
                        className={
                          newCredentialsError.emailError === ""
                            ? "textInput"
                            : " textInput errorInput"
                        }
                        onChange={(e) => InputHandler(e)}
                        onBlur={(e) => InputCheck(e)}
                      />
                    </MDBCol>

                    <MDBCol md="6">
                      <MDBInput
                        maxLength={9}
                        wrapperClass="mb-4"
                        placeholder="Teléfono"
                        size="lg"
                        id="form4"
                        type="phone"
                        name="phone"
                        className={
                          newCredentialsError.phoneError === ""
                            ? "textInput"
                            : " textInput errorInput"
                        }
                        onChange={(e) => InputHandler(e)}
                        onBlur={(e) => InputCheck(e)}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="6">
                      <MDBInput
                        maxLength={9}
                        wrapperClass="mb-4"
                        placeholder="DNI"
                        size="lg"
                        id="form5"
                        type="integer"
                        name="dni"
                        className={
                          newCredentialsError.dniError === ""
                            ? "textInput"
                            : "textInput errorInput"
                        }
                        onChange={(e) => InputHandler(e)}
                        onBlur={(e) => InputCheck(e)}
                      />
                    </MDBCol>

                    <MDBCol md="6">
                      <MDBInput
                        maxLength={6}
                        wrapperClass="mb-4"
                        placeholder="Código postal"
                        size="lg"
                        id="form6"
                        type="integer"
                        name="cp"
                        className={
                          newCredentialsError.cpError === ""
                            ? "textInput"
                            :  "textInput errorInput"
                        }
                        onChange={(e) => InputHandler(e)}
                        onBlur={(e) => InputCheck(e)}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="4" className="">
                      <div className="dateOfBirthTitleDesign">
                        FECHA DE NACIMIENTO{" "}
                      </div>
                    </MDBCol>

                    <MDBCol md="8">
                      <MDBInput
                        wrapperClass="mb-4"
                        placeholder="Año de nacimiento"
                        size="lg"
                        id="form7"
                        type="date"
                        name="birth_date"
                        className={
                          newCredentialsError.birth_dateError === ""
                            ? "textInput"
                            :  "textInput errorInput"
                        }
                        onChange={(e) => InputHandler(e)}
                        onBlur={(e) => InputCheck(e)}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBInput
                      maxLength={20}
                      wrapperClass="mb-4"
                      size="lg"
                      id="form8"
                      type="password"
                      placeholder="Contraseña"
                      name="password"
                      className={
                        newCredentialsError.passwordError === ""
                          ? "textInput"
                          :  "textInput errorInput"
                      }
                      onChange={(e) => InputHandler(e)}
                      onBlur={(e) => InputCheck(e)}
                    />
                  </MDBRow>
                  <MDBRow>
                    <MDBInput
                      maxLength={20}
                      wrapperClass="mb-4"
                      size="lg"
                      id="form9"
                      type="password"
                      placeholder="Repite la contraseña"
                      name="doubleCheckPassword"
                      className={
                        newCredentialsError.doubleCheckPasswordError === ""
                          ? "textInput"
                          :  "textInput errorInput"
                      }
                      onChange={(e) => InputHandler(e)}
                      onBlur={(e) => InputCheck(e, newCredentials.password)}
                    />
                  </MDBRow>
                  <MDBRow>
                    <div className="d-flex justify-content-center p-0">
                      <button
                        type="submit"
                        onClick={registerMeHandler}
                        className="sendButtonRegisterDesign"
                      >
                        Enviar
                      </button>
                    </div>
                  </MDBRow>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

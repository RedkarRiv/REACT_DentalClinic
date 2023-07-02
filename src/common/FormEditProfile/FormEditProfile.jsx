import React, { useState, useEffect } from "react";
import { CheckError } from "../../services/useful";
import { editMe } from "../../services/apiCall";
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
import "./FormEditProfile.css";
import { useSelector } from "react-redux";
import { userDataCheck } from "../../pages/userSlice";

export const FormEditProfile = () => {
  const credentialsRdx = useSelector(userDataCheck);
  const credentialCheck = credentialsRdx?.credentials?.token;

  const editMeHandler = () => {
    console.log("Edicion iniciada");
    editMe(credentialCheck, newUserData)
      .then((resultado) => {
        console.log(resultado);
            })
            .catch((error) => console.log(error));
        }


  // HOOKS Y HANDLERS PARA VALIDACION DE INPUTS DEL FORMULARIO
  const [newUserData, setNewUserData] = useState({});

  const [newUserDataError, setNewUserDataError] = useState({
    nameError: "",
    surnameError: "",
    phoneError: "",
    dniError: "",
    cpError: "",
    birth_dateError: "",
  });

  const InputHandler = (e) => {
    setNewUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const InputCheck = (e, password) => {
    let mensajeError = CheckError(e.target.name, e.target.value, password);

    setNewUserDataError((prevState) => ({
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
                          newUserDataError.nameError === ""
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
                          newUserDataError.surnameError === ""
                            ? "textInput"
                            : " textInput errorInput"
                        }
                        onChange={(e) => InputHandler(e)}
                        onBlur={(e) => InputCheck(e)}
                      />
                    </MDBCol>
                  </MDBRow>

                    <MDBCol md="12">
                      <MDBInput
                        maxLength={9}
                        wrapperClass="mb-4"
                        placeholder="Teléfono"
                        size="lg"
                        id="form4"
                        type="phone"
                        name="phone"
                        className={
                          newUserDataError.phoneError === ""
                            ? "textInput"
                            : " textInput errorInput"
                        }
                        onChange={(e) => InputHandler(e)}
                        onBlur={(e) => InputCheck(e)}
                      />
                    </MDBCol>

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
                          newUserDataError.dniError === ""
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
                        className="textInput"
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
                          newUserDataError.birth_dateError === ""
                            ? "textInput"
                            :  "textInput errorInput"
                        }
                        onChange={(e) => InputHandler(e)}
                        onBlur={(e) => InputCheck(e)}
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <div className="d-flex justify-content-center p-0">
                      <button
                        type="submit"
                        onClick={editMeHandler}
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

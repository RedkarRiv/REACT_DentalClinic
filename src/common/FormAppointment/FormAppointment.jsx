import React, { useState, useEffect } from "react";
import { CheckError } from "../../services/useful";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userDataCheck } from "../../pages/userSlice";
import { getOneUser } from "../../services/apiCall";
import Select from "react-select";

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
import "./FormAppointment.css";

export const FormAppointment = () => {
  const InputHandler = (e) => {
    setNewCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const InputCheck = (e) => {
    let mensajeError = CheckError(e.target.name, e.target.value);

    setNewCredentialsError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: mensajeError,
    }));
  };

  const dispatch = useDispatch();

  const appointMeHandler = () => {
    console.log("Registro de cita iniciado");
    appointMe(newAppointment)
      .then((resultado) => {
        console.log(resultado);
        setTimeout(() => {}, 1000);
      })
      .catch((error) => console.log(error));
  };

  const [userData, setUserData] = useState({});
  const credentialsRdx = useSelector(userDataCheck);
  const credentialCheck = credentialsRdx?.credentials?.token;
  const treatmentsDropdown = [
    { value: "Consulta", label: "Consulta" },
    { value: "Revisión", label: "Revisión" },
    { value: "Limpieza bucal", label: "Limpieza" },
    { value: "Extracción", label: "Extracción" },
    { value: "Ortodoncia", label: "Ortodoncia" },
    { value: "Intervencion especial", label: "Intervencion" },
  ];
  const [treatmentSelected, setTreatmentSelected] = useState(null);

  const doctorDropdown = [
    { value: "Marta Martinez", label: "Marta Martinez" },
    { value: "Pedro Palomares", label: "Pedro Palomares" },
    { value: "Sara Sueca", label: "Sara Sueca" },
    { value: "Zaida Zore", label: "Zaida Zore" },
    { value: "Marcos Ruperto", label: "Marcos Ruperto" },
  ];
  const [doctorSelected, setDoctorSelected] = useState(null);

  const checkUserData = () => {
    getOneUser(credentialCheck)
      .then((resultado) => {
        console.log("Esto es el credentialCheck de FomrAppointment");
        console.log(resultado);
        if (resultado.data.message == "Token invalido") {
          navigate("/");
          return;
        } else {
          setUserData(resultado.data.data);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    checkUserData();
  }, [credentialsRdx]);

  // HOOKS Y HANDLERS PARA VALIDACION DE INPUTS DEL FORMULARIO
  const [newAppointment, setnewAppointment] = useState({});

  const [newCredentialsError, setNewCredentialsError] = useState({
    newAppointmentDateError: "",
  });

  // const registerMeHandler = () => {
  //   console.log("Registro iniciado");
  //   registerMe(newCredentials)
  //     .then((resultado) => {
  //       console.log((resultado.data.id));
  //       if (resultado.data.id !== "undefined") {
  //           const instantLoginCredentials = {
  //               email: resultado.data.email,
  //               password:newCredentials.password,
  //           }
  //           loginMe(instantLoginCredentials)
  //           .then((resultado) => {
  //               console.log("Esto es el login correcto");
  //               let decoded = jwt_decode(resultado.data.token);

  //               let datosBackend = {
  //                 token: resultado.data.token,
  //                 user: decoded,
  //               };

  //               //Guardo en redux.....
  //               dispatch(login({ credentials: datosBackend }));

  //               setTimeout(() => {}, 1000);
  //             })
  //           .catch((error) => console.log(error));
  //       }

  //       setTimeout(() => {}, 1000);
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
    <MDBContainer fluid className="registerCardFormBackground">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBCard className="ps-2 pe-2 cardBorderDeleteDesign">
            <MDBRow className="g-0">
              <MDBCol md="12">
                <MDBCardBody className="text-black d-flex flex-column justify-content-center m-0 p-0">
                  <MDBRow>
                    <MDBCol md="6">
                      <div className="nameAppointment">{userData.name}</div>
                    </MDBCol>

                    <MDBCol md="6">
                      {" "}
                      <div className="surnameAppointment">
                        {userData.surname}{" "}
                      </div>
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="12" className="mt-3">
                      <Select
                        wrapperClass="mb-4"
                        placeholder="Escoge un tratamiento"
                        options={treatmentsDropdown}
                        value={treatmentSelected}
                        onChange={setTreatmentSelected}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="12" className="mt-3">
                      <Select
                        wrapperClass="mb-4"
                        placeholder="Escoge un doctor"
                        options={doctorDropdown}
                        value={doctorSelected}
                        onChange={setDoctorSelected}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="12" className="mt-3">
                      <MDBInput
                        wrapperClass="mb-4"
                        size="lg"
                        id="form2"
                        type="date"
                        name="newAppointmentDate"
                        className={
                          newCredentialsError.birth_dateError === ""
                            ? "textInput"
                            : " textInput"
                        }
                        onChange={(e) => InputHandler(e)}
                        onBlur={(e) => InputCheck(e)}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="12">
                      <MDBInput
                        wrapperClass="mb-4"
                        size="lg"
                        id="form2"
                        type="time"
                        name="newAppointmentTime"
                        className={
                          newCredentialsError.birth_dateError === ""
                            ? "textInput"
                            : " textInput"
                        }
                        onChange={(e) => InputHandler(e)}
                        onBlur={(e) => InputCheck(e)}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="12">
                      <MDBInput
                        maxLength={100}
                        wrapperClass="mb-4"
                        placeholder="Comentarios"
                        size="lg"
                        id="form3"
                        type="text"
                        name="newAppointmentComment"
                        className="commentInputSize"
                        onChange={(e) => InputHandler(e)}
                        onBlur={(e) => InputCheck(e)}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="d-flex justify-content-center">
                    <div className="sendButtonNewAppointmentDesign">
                      Crear cita
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

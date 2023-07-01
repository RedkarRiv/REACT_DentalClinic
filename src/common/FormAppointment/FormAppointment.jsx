import React, { useState, useEffect } from "react";
import { CheckError } from "../../services/useful";
import { useDispatch, useSelector } from "react-redux";
import { userDataCheck } from "../../pages/userSlice";
import { getOneUser, appointMe } from "../../services/apiCall";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const [treatmentSelected, setTreatmentSelected] = useState({});
  const [doctorSelected, setDoctorSelected] = useState({});

  // HOOKS Y HANDLERS PARA VALIDACION DE INPUTS DEL FORMULARIO

  const [newAppointmentError, setNewAppointmentError] = useState({});

  const InputHandler = (e) => {
    setNewAppointment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(newAppointment);
  };

  const InputHandlerSelect = (e) => {
    console.log("esto es el target.value ");
    console.log(e);

    setNewAppointment((prevValues) => ({
      ...prevValues,
      [e.name]: e.value,
    }));
  };

  const dropDownHandler = (e) => {
    setNewAppointment((prevState) => ({
      ...prevState,
    }));
  };

  const [userData, setUserData] = useState({});
  const credentialsRdx = useSelector(userDataCheck);
  const credentialCheck = credentialsRdx?.credentials?.token;

  const appointMeHandler = () => {
    console.log("Registro de cita iniciado");
    console.log(credentialsRdx?.credentials?.token);
    appointMe(credentialCheck, newAppointment)
      .then((resultado) => {
        console.log(newAppointment);
        setTimeout(() => {
          navigate("/userprofile");
        }, 500);
      })
      .catch((error) => console.log(error));
  };

  const [newAppointment, setNewAppointment] = useState({
    employee_id: doctorSelected?.value,
    appointment_date: "2023-06-21 09:00",
    treatment: treatmentSelected?.value,
    comments: "",
    status: "Concertada",
  });

  const treatmentsDropdown = [
    { value: 1, label: "Consulta", name: "treatment" },
    { value: "Revisión", label: "Revisión", name: "treatment" },
    { value: "Limpieza bucal", label: "Limpieza", name: "treatment" },
    { value: "Extracción", label: "Extracción", name: "treatment" },
    { value: "Ortodoncia", label: "Ortodoncia", name: "treatment" },
    {
      value: "Intervencion especial",
      label: "Intervencion",
      name: "treatment",
    },
  ];

  const doctorDropdown = [
    { value: 7, label: "Marta Martinez", name: "employee_id" },
    { value: "Pedro Palomares", label: "Pedro Palomares", name: "employee_id" },
    { value: "Sara Sueca", label: "Sara Sueca", name: "employee_id" },
    { value: "Zaida Zore", label: "Zaida Zore", name: "employee_id" },
    { value: "Marcos Ruperto", label: "Marcos Ruperto", name: "employee_id" },
  ];

  const checkUserData = () => {
    getOneUser(credentialCheck)
      .then((resultado) => {
        console.log("Esto es el credentialCheck de FomrAppointment");
        console.log(resultado);
        if (resultado.data.message == "Token invalido") {
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
                        value={treatmentsDropdown.value}
                        name="treatment"
                        onChange={InputHandlerSelect}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="12" className="mt-3">
                      <Select
                        wrapperClass="mb-4"
                        placeholder="Escoge un doctor"
                        options={doctorDropdown}
                        value={doctorDropdown.value}
                        name="employee_id"
                        onChange={InputHandlerSelect}
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
                        className="textInput"
                        onChange={(e) => InputHandler(e)}
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
                        className="textInput"
                        onChange={(e) => InputHandler(e)}
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
                        name="comments"
                        className="commentInputSize"
                        onChange={(e) => InputHandler(e)}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="d-flex justify-content-center">
                    <div
                      className="sendButtonNewAppointmentDesign"
                      onClick={appointMeHandler}
                    >
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

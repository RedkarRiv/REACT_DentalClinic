import React, { useState, useEffect } from "react";
import { CheckError } from "../../services/useful";
import { useDispatch, useSelector } from "react-redux";
import { userDataCheck } from "../../pages/userSlice";
import {
  getOneUser,
  appointMe,
  getAllEmployees,
  getAllTreatments,
} from "../../services/apiCall";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

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
  const [errorMessage, setErrorMessage] = useState("");

  // HOOKS Y HANDLERS PARA VALIDACION DE INPUTS DEL FORMULARIO

  const InputHandler = (e) => {
    setNewAppointment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      appointment_date: `${prevState.appDate} ${prevState.appTime}`,
    }));
  };

  const InputHandlerSelect = (e) => {
    console.log("esto es el e --------------------");
    console.log(e);
    setNewAppointment((prevValues) => ({
      ...prevValues,
      [e.name]: e.value,
    }));
  };

  const [userData, setUserData] = useState({});
  const credentialsRdx = useSelector(userDataCheck);
  const credentialCheck = credentialsRdx?.credentials?.token;

  const appointMeHandler = () => {

    appointMe(credentialCheck, newAppointment)
      .then((resultado) => {
        setErrorMessage(resultado.data.message);
        setTimeout(() => {
          navigate("/userprofile");
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [newAppointment, setNewAppointment] = useState({
    employee_id: "",
    appointment_date: "",
    treatment: "",
    comments: "",
    status: "Concertada",
  });

  const [doctorList, setDoctorList] = useState([]);

  const [treatmentList, setTreatmentList] = useState([]);

  useEffect(() => {
    getAllEmployees()
      .then((resultado) => {
        setDoctorList(resultado.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getAllTreatments()
      .then((resultado) => {
        setTreatmentList(resultado.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const checkUserData = () => {
    getOneUser(credentialCheck)
      .then((resultado) => {
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
            <MDBRow className="g -0">
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
                        options={treatmentList.map((treatment) => ({
                          value: treatment.id,
                          label: treatment.name,
                          name: "treatment",
                        }))}
                        onChange={InputHandlerSelect}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="12" className="mt-3">
                      <Select
                        wrapperClass="mb-4"
                        placeholder="Escoge un doctor"
                        options={doctorList.map((doctor) => ({
                          value: doctor.id,
                          label: doctor.User.name + " " + doctor.User.surname,
                          name: "employee_id",
                        }))}
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
                        name="appDate"
                        min={moment().format("YYYY-MM-DD")}
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
                        name="appTime"
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
                  <MDBRow>
                    <MDBCol md="12" className="errorMessageDesign">
                      {errorMessage}
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

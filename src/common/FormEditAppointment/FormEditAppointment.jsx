import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userDataCheck } from "../../pages/userSlice";
import { getOneUser, editMyAppoint } from "../../services/apiCall";
import { useNavigate } from "react-router-dom";

import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import "./FormEditAppointment.css";

export const FormEditAppointment = ({id}) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const credentialsRdx = useSelector(userDataCheck);
  const credentialCheck = credentialsRdx?.credentials?.token;
  const [editAppointment, setEditAppointment] = useState({});

  const InputHandler = (e) => {
    setEditAppointment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(editAppointment);
  };
  const appointEditMeHandler = () => {
    console.log("Edicion de cita iniciado");
    console.log("esto es la id del appointmnet")
    console.log(id)
    editMyAppoint(credentialCheck, editAppointment, id)
      .then((resultado) => {
        console.log(resultado);
        setTimeout(() => {
          navigate("/userprofile");
        }, 500);
      })
      .catch((error) => console.log(error));
  };

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
                      onClick={appointEditMeHandler}
                    >
                      Editar cita
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

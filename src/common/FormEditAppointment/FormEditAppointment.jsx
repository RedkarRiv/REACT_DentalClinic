import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userDataCheck } from "../../pages/userSlice";
import { getOneUser, editMyAppoint } from "../../services/apiCall";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

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
      appointment_date: `${prevState.appDate} ${prevState.appTime}`
    }));
  };



  const appointEditMeHandler = () => {
   
    editMyAppoint(credentialCheck, editAppointment, id)
      .then((resultado) => {
        setTimeout(() => {
          navigate("/userprofile");
        }, 500);
      })
      .catch((error) => console.log(error));
  };

const appointCancelMeHandler = () => {
  setEditAppointment({
    status:"Anulada",
  appointment_date: "2020-00-00 12:00",
  })
  editMyAppoint(credentialCheck, editAppointment, id)
  .then((resultado) => {
   

  })
  .catch((error) => console.log(error));
}


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
                        min={moment().format('YYYY-MM-DD')}
                        name="appDate"
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
                        onBlur={(e) => InputHandler(e)}
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

                  <MDBRow className="d-flex justify-content-center w-100">
                    <div
                      className="sendButtonEditAppointmentDesign"
                      onClick={appointEditMeHandler}
                    >
                      Editar cita
                    </div>
                      {/* <div
                        className="sendButtonEditAppointmentDesign"
                        onClick={appointCancelMeHandler}
                      >
                        Cancelar cita
                      </div> */}
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

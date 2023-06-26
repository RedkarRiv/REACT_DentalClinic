import("./AppointmentsCard.css");
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { getOneAppointment } from "../../services/apiCall";
import { useSelector } from "react-redux";
import { userDataCheck } from "../../pages/userSlice";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AppointmentsCard = () => {
  const navigate = useNavigate();

  const [appointmentData, setappointmentData] = useState({});
  const credentialsRdx = useSelector(userDataCheck);
  const credentialCheck = credentialsRdx?.credentials?.token;

  const getMyAppointments = () => {
    getOneAppointment(credentialCheck)
      .then((resultado) => {
        console.log("Esto es el then de getOneUser");
        console.log(resultado);
        console.log("Esto es el nombre del usuario");
        console.log(resultado.data.data);
        if (resultado.data.message == "Token invalido") {
          navigate("/");
          return;
        } else {
          setappointmentData(resultado.data.data);
        }
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getMyAppointments();
  }, [credentialsRdx]);

  return (
    <>
      {appointmentData.length > 0 ? (
        appointmentData.map((appointment) => (
          <MDBTableBody className="w-100">
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://www.shareicon.net/data/512x512/2016/08/18/813847_people_512x512.png"
                    alt="doctor_avatar"
                    style={{ width: "	2.75em", height: "2.75em" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{appointment.doctor.id}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{appointment.Treatment.name}</p>
              </td>
              <td>
                <MDBBadge color="success" pill>
                  Concertada
                </MDBBadge>
              </td>
              <td>{appointment.appointment_date}</td>
              <td>
                <div
                  className="viewButtonDesign"
                  onClick={() => navigate("/appointmentdetail")}
                >
                  Ver
                </div>
              </td>
            </tr>
          </MDBTableBody>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

import("./AppointmentsCard.css");
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import {
  getAllAppointmentsByUser,
  getAllAppointments,
} from "../../services/apiCall";
import { useSelector } from "react-redux";
import { userDataCheck } from "../../pages/userSlice";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AppointmentsCard = () => {
  const navigate = useNavigate();

  const credentialsRdx = useSelector(userDataCheck);
  const credentialCheck = credentialsRdx?.credentials?.token;
  const credentialRolCheck = credentialsRdx?.credentials?.user?.roleId;

  const getMyAppointments = () => {
    switch (credentialRolCheck) {
      case 1:
        return getAllAppointmentsByUser(credentialCheck)
          .then((resultado) => {
            console.log("Esto es el resultado getAllAppointmentsByUser");
            console.log(resultado.data.data);

            if (resultado.data.message == "Token invalido") {
                navigate("/");
                return;
            } else {
              setappointmentData(resultado.data.data);
            }
          })
          .catch((error) => console.log(error));
      case 2:
      case 3:
        return getAllAppointments(credentialCheck)
          .then((resultado) => {
            console.log("Esto es el resultado getAllAppointmentsByUser");
            console.log(resultado.data.data);

            if (
              resultado.data.message == "Token invalido" ||
              !resultado.data.message
            ) {
              navigate("/");
              return;
            } else {
              setappointmentData(resultado.data.data);
            }
          })
          .catch((error) => console.log(error));

      default:
        navigate("/");

        break;
    }

    if (credentialRolCheck == 1) {
      getAllAppointmentsByUser(credentialCheck)
        .then((resultado) => {
          console.log("Esto es el resultado getAllAppointmentsByUser");
          console.log(resultado.data.data);

          if (resultado.data.message == "Token invalido") {
            navigate("/");
            return;
          } else {
            setappointmentData(resultado.data.data);
          }
        })
        .catch((error) => console.log(error));
    } else {
      getAllAppointments(credentialCheck)
        .then((resultado) => {
          console.log("Esto es el resultado getAllAppointmentsByUser");
          console.log(resultado.data.data);

          if (
            resultado.data.message == "Token invalido" ||
            !resultado.data.message
          ) {
            navigate("/");
            return;
          } else {
            setappointmentData(resultado.data.data);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    getMyAppointments();
  }, [credentialsRdx]);

  const [appointmentData, setappointmentData] = useState({});

  //   const appointmentDate = '2023-06-05T12:00:00.000Z';
  //   const dia = appointmentDate.slice(0, 10);
  //   const hora = appointmentDate.slice(11, 16);

  return (
    <>
      {appointmentData.length > 0 ? (
        appointmentData.map((appointment) => (
          <MDBTableBody className="w-100" id={appointment.id}>
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
                    <div className="fw-bold mb-1">
                      
                     {credentialRolCheck == 2 || credentialRolCheck == 3 ? (
                     
                        <p>Nombre de usuario</p> 
                      
                      ) : <p> {appointment?.doctor?.User?.name} {appointment?.doctor?.User?.surname}</p>}
                      

                    </div>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{appointment.Treatment.name}</p>
              </td>
              <td>
                <MDBBadge color="success" pill>
                  {appointment.status}{" "}
                </MDBBadge>
              </td>
              <td className="dateAppointmentDesign">
                {" "}
                {appointment.appointment_date}{" "}
              </td>
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

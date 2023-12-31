import("./AppointmentsCard.css");
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBModal,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalDialog,
} from "mdb-react-ui-kit";
import { FormEditAppointment } from "../FormEditAppointment/FormEditAppointment";
import {
  getAllAppointmentsByUser,
  getAllAppointments,
  searchAppointments,
  searchAppointmentsByEmployee,
  editMyAppoint,
} from "../../services/apiCall";
import { useSelector } from "react-redux";
import { userDataCheck } from "../../pages/userSlice";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

export const AppointmentsCard = ({ searchDate }) => {
  const navigate = useNavigate();

  const [appointmentEditModal, setAppointmentEditModal] = useState(false);

  const activateAppointmentEditModal = () =>
    setAppointmentEditModal(!appointmentEditModal);

  const credentialsRdx = useSelector(userDataCheck);
  const credentialCheck = credentialsRdx?.credentials?.token;
  const credentialRolCheck = credentialsRdx?.credentials?.user?.roleId;
  const [appointmentData, setappointmentData] = useState([]);
  const [dropdownState, setDropdownState] = useState({});

  const getMyAppointments = () => {
    if (searchDate !== "") {
      const bring = setTimeout(() => {
        if (credentialRolCheck === 1) {
          searchAppointments(credentialsRdx, searchDate)
            .then((resultado) => {
            
              setappointmentData(resultado.data.data);
            })
            .catch((error) => console.log(error));
        } else {
          searchAppointmentsByEmployee(credentialsRdx, searchDate)
            .then((resultado) => {
            
              setappointmentData(resultado.data.data);
            })
            .catch((error) => console.log(error));
        }
      }, 350);

      return () => clearTimeout(bring);
    } else
      switch (credentialRolCheck) {
        case 1:
          return getAllAppointmentsByUser(credentialCheck)
            .then((resultado) => {
           
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
  };

  const toggleDropdown = (appointmentId) => {
    setDropdownState((prevState) => ({
      ...prevState,
      [appointmentId]: !prevState[appointmentId],
    }));
  };

  
  useEffect(() => {
    getMyAppointments();
  }, [credentialsRdx, searchDate, ]);

  return (
    <>
      {appointmentData ? (
        appointmentData.map((appointment) => (
          <MDBTableBody className="w-100" key={appointment?.id}>
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
                      <p>
                        {" "}
                        {appointment?.doctor?.User?.name}{" "}
                        {appointment?.doctor?.User?.surname}
                      </p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{appointment?.Treatment?.name}</p>
              </td>
              <td>
                <MDBBadge
                  color={
                    appointment.status == "Concertada"
                      ? "success"
                      : appointment.status == "Anulada"
                      ? "danger"
                      : "primary"
                  }
                  pill
                >
                  {appointment.status}{" "}
                </MDBBadge>
              </td>
              <td className="dateAppointmentDesign">
                {appointment?.appointment_date}
              </td>
              <td>
                <div
                  className="viewButtonDesign"
                  onClick={() => toggleDropdown(appointment.id)}
                >
                  Ver
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan="5" className="p-0">
                {dropdownState[appointment?.id] && (
                  <div className="d-flex flex-column justify-content-center ps-3 pe-3">
                    <div>
                      <div className="pt-2">
                        <p>
                          <strong>Tratamiento:</strong>{" "}
                          {appointment?.Treatment?.name}
                        </p>
                        <p>
                          <strong>Precio:</strong>{" "}
                          {appointment?.Treatment?.price} €
                        </p>
                      </div>
                      <div className="pb-2">
                        <p>
                          <strong>Descripción:</strong>{" "}
                          {appointment.Treatment.comments}
                        </p>
                        <p>
                          <strong>Comentarios:</strong> {appointment?.comments}
                        </p>
                      </div>
                    </div>
                    {appointment?.status !== "Anulada" ? (
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="appointmentButtonsContainerDesign">
                          <div
                            className="appointmentButtonsDesign"
                            onClick={activateAppointmentEditModal}
                          >
                            Modificar cita
                          </div>
                          <MDBModal
                            show={appointmentEditModal}
                            setShow={setAppointmentEditModal}
                            tabIndex="-1"
                          >
                            <MDBModalDialog className="appointmentModalDesign">
                              <MDBModalContent>
                                <MDBModalHeader>
                                  <MDBModalTitle className="titleModalLogin">
                                    Editar cita{" "}
                                  </MDBModalTitle>
                                </MDBModalHeader>
                                <MDBModalBody>
                                  <FormEditAppointment id={appointment.id} date={appointment.appointment_date} />
                                </MDBModalBody>
                              </MDBModalContent>
                            </MDBModalDialog>
                          </MDBModal>
                        </div>
                      </div>
                    ) : null}
                  </div>
                )}
              </td>
            </tr>
          </MDBTableBody>
        ))
      ) : (
        <p className="noAppointmentTextDesign">NO HAY CITAS</p>
      )}
    </>
  );
};

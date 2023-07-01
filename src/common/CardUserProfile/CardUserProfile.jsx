import "./CardUserProfile.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBTableHead,
  MDBTable,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { AppointmentsCard } from "../AppointmentsCard/AppointmentsCard";
import { getOneUser } from "../../services/apiCall";
import { useSelector } from "react-redux";
import { userDataCheck } from "../../pages/userSlice";
import React, { useState, useEffect } from "react";
import { FormAppointment } from "../FormAppointment/FormAppointment";
import { FormEditProfile } from "../FormEditProfile/FormEditProfile";
export const CardUserProfile = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});
  const credentialsRdx = useSelector(userDataCheck);
  const credentialCheck = credentialsRdx?.credentials?.token;

  const getMyProfile = () => {
    getOneUser(credentialCheck)
      .then((resultado) => {
        console.log("Esto es el then de getOneUser");
        console.log(resultado);
        console.log("Esto es el nombre del usuario");
        console.log(resultado.data.data);
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
    getMyProfile();
  }, [credentialsRdx]);

  const [appointmentModal, setAppointmentModal] = useState(false);

  const activateAppointmentModal = () => setAppointmentModal(!appointmentModal);

  const [userEditModal, setUserEditeModal] = useState(false);

  const activateuserEditModal = () => setUserEditeModal(!appointmentModal);

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <div className="menuFontDesign" onClick={() => navigate("/")}>
                  Home
                </div>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Perfil de Usuario</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <div className="titleUserDesign">Bienvenido {userData.name}</div>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4 pt-3">
              <MDBCardBody className="text-center pt-4">
                <MDBCardImage
                  src={userData.avatar_img}
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <div className="text-muted mb-4 mt-4">
                  {userData.name} {userData.surname}
                </div>
                <div className="d-flex justify-content-center mb-2">
                  <div
                    className="redesignButton"
                    onClick={activateAppointmentModal}
                  >
                    Nueva cita
                  </div>
                  <MDBModal
                    show={appointmentModal}
                    setShow={setAppointmentModal}
                    tabIndex="-1"
                  >
                    <MDBModalDialog className="appointmentModalDesign">
                      <MDBModalContent>
                        <MDBModalHeader>
                          <MDBModalTitle className="titleModalLogin">
                            NUEVA CITA
                          </MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                          <FormAppointment />
                        </MDBModalBody>
                      </MDBModalContent>
                    </MDBModalDialog>
                  </MDBModal>

                  <div
                    className="redesignButton"
                    onClick={activateuserEditModal}
                  >
                    Editar
                  </div>

                  <MDBModal
                    show={userEditModal}
                    setShow={setUserEditeModal}
                    tabIndex="-1"
                  >
                    <MDBModalDialog className="editUserModalDesign">
                      <MDBModalContent>
                        <MDBModalHeader>
                          <MDBModalTitle className="titleModalLogin">
                            EDITAR USUARIO{" "}
                          </MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                          <FormEditProfile />
                        </MDBModalBody>
                      </MDBModalContent>
                    </MDBModalDialog>
                  </MDBModal>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3" lg="4">
                    <MDBCardText>Nombre</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9" lg="8">
                    <MDBCardText className="text-muted">
                      {userData.name} {userData.surname}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3" lg="4">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9" lg="8">
                    <MDBCardText className="text-muted">
                      {userData.email}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3" lg="4">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9" lg="8">
                    <MDBCardText className="text-muted">
                      {userData.phone}{" "}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3" lg="4">
                    <MDBCardText>Fecha de nacimiento</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9" lg="8" className=" d-flex align-items-center">
                    <MDBCardText className="text-muted">
                      {userData.birth_date}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3" lg="4">
                    <MDBCardText>Código postal</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9" lg="8">
                    <MDBCardText className="text-muted">
                      {userData.cp}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow>
                  <MDBCol sm="3" lg="4">
                    <MDBCardText>DNI</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9" lg="8">
                    <MDBCardText className="text-muted">
                      {userData.dni}{" "}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBListGroup className="rounded-3">
                <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                  <form className="d-flex input-group w-75">
                    <input
                      type="date"
                      className="form-control searchFormDesign"
                      placeholder="..."
                    />
                    <div className="redesignButton2">Buscar cita</div>
                  </form>
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6" lg="12">
                <MDBCard className="mb-4 mb-md-0 ">
                  <MDBCardBody>
                    <MDBCard className="mb-4 d-flex justify-content-between">
                      <div className="titleAppointmentDesign">CITAS </div>
                    </MDBCard>
                    <MDBTable
                      align="middle"
                      className="fontResizeAppointmentsTitle"
                    >
                      <MDBTableHead>
                        <tr>
                          <th scope="col">Doctor/Doctora</th>
                          <th scope="col">Tipo</th>
                          <th scope="col">Estado</th>
                          <th scope="col">Fecha</th>
                          <th scope="col">Detalle</th>
                        </tr>
                      </MDBTableHead>
                      <AppointmentsCard />
                    </MDBTable>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

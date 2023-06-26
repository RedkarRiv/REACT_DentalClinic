import React from "react";
import "./CardAdminProfile.css";
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
} from "mdb-react-ui-kit";
import { AppointmentsCard } from "../AppointmentsCard/AppointmentsCard";
import { useNavigate } from "react-router-dom";

export const CardAdminProfile = () => {
  const navigate = useNavigate()

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem >
                <div className="menuFontDesign" onClick={() => navigate("/")}>
                  Home
                </div>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Perfil de Admin</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <div className="titleUserDesign">Bienvenido ADMIN</div>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4 pt-3">
              <MDBCardBody className="text-center pt-4">
                <MDBCardImage
                  src="https://w7.pngwing.com/pngs/812/462/png-transparent-account-avatar-profile-user-avatars-icon.png"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1 mt-4">Arthur Arpon</p>
                <p className="text-muted mb-4">Registro: 12-08-2022</p>
                <div className="d-flex justify-content-center mb-2">
                  <div className="redesignButtonAdmin">Editar</div>
                </div>
                <div className="d-flex justify-content-center mb-2">
                  <div className="redesignButtonAdmin">Crear tratamiento</div>
                  <div className="redesignButtonAdmin">Crear empleado</div>
                </div>
                <div className="d-flex justify-content-center mb-2">
                  <div className="redesignButtonAdmin">Editar tratamiento</div>
                  <div className="redesignButtonAdmin">Editar empleado</div>
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
                      Arthur Arpon{" "}
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
                      example@example.com
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
                      (097) 234-5678
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3" lg="4">
                    <MDBCardText>Fecha de nacimiento</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9" lg="8" className=" d-flex align-items-center">
                    <MDBCardText className="text-muted">12-06-1912</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3" lg="4">
                    <MDBCardText>Código postal</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9" lg="8">
                    <MDBCardText className="text-muted">
                      46009
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow>
                  <MDBCol sm="3" lg="4">
                    <MDBCardText>DNI</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9" lg="8">
                    <MDBCardText className="text-muted">76443237F </MDBCardText>
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
                  <form className="d-flex input-group w-100">
                    <input
                      type="search"
                      className="form-control searchFormDesign"
                      placeholder=""
                      aria-label="Search"
                    />
                    <div className="redesignButton2">Buscar usuario</div>
                  </form>
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCard>

            <MDBRow>
              <MDBCol sm="6"  md="12" lg="12">
                <MDBCard className="mb-4 mb-md-0 ">
                  <MDBCardBody>
                    <MDBCardText className="mb-4 d-flex justify-content-between">
                      <div className="titleAppointmentDesign">TODOS LOS USUARIOS</div>
                    </MDBCardText>
                    <MDBTable align="middle" className="fontResizeAppointmentsTitle">
                      <MDBTableHead>
                        <tr>
                          <th scope="col">Usuario</th>
                          <th scope="col">Rol</th>
                          <th scope="col">Estado</th>
                          <th scope="col">Registrado</th>
                          <th scope="col">Detalle</th>
                        </tr>
                      </MDBTableHead>{" "}
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

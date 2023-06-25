import React from "react";
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
  MDBTable
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { AppointmentsCard } from "../AppointmentsCard/AppointmentsCard";

export const CardUserProfile = () => {
  const navigate = useNavigate();

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
          <div className="titleUserDesign">Bienvenido Jonathan</div>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4 pt-3">
              <MDBCardBody className="text-center pt-4">
                <MDBCardImage
                  src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <div className="text-muted mb-1 mt-4">Jonathan Smith</div>
                <div className="text-muted mb-4">Registro: 12-08-2022</div>
                <div className="d-flex justify-content-center mb-2">
                  <div className="redesignButton">Nueva cita</div>
                  <div className="redesignButton">Editar</div>
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
                      Johnatan Smith
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
                      <div className="titleAppointmentDesign">TUS CITAS </div>
                    </MDBCard>
                    <MDBTable align="middle" className="fontResizeAppointmentsTitle">
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

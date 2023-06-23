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
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

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
      <div className="titleUserDesign">
                        Bienvenido Jonathan
                      </div>

      </MDBRow>
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center pt-4">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1 mt-4">Jonathan Smith</p>
                <p className="text-muted mb-4">Registro: 12-08-2022</p>
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
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9" lg="8">
                    <MDBCardText className="text-muted">
                      Bay Area, San Francisco, CA
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBListGroup flush className="rounded-3">
                <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                  <form className="d-flex input-group w-75">
                    <input
                      type="search"
                      className="form-control searchFormDesign"
                      placeholder="..."
                      aria-label="Search"
                    />
                    <div className="redesignButton2">Buscar cita</div>
                  </form>
                </MDBListGroupItem>

                <MDBListGroupItem className="d-flex justify-content-start align-items-center p-3">
                  <MDBIcon fas icon="globe fa-lg text-warning" />
                  <MDBCardText>
                    <p>Cita el 29 de enero de 2024 a las 18:30</p>
                  </MDBCardText>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-start align-items-center p-3">
                  <MDBIcon fas icon="globe fa-lg text-warning" />
                  <MDBCardText>
                    <p>Cita el 12 de febrero de 2024 a las 15:30</p>
                  </MDBCardText>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-start align-items-center p-3">
                  <MDBIcon fas icon="globe fa-lg text-warning" />
                  <MDBCardText>
                    <p>Cita el 2 de marzo de 2024 a las 12:30</p>
                  </MDBCardText>
                </MDBListGroupItem>
                <MDBListGroupItem className="d-flex justify-content-start align-items-center p-3">
                  <MDBIcon fas icon="globe fa-lg text-warning" />
                  <MDBCardText>
                    <p>Cita el 1 de agosto de 2024 a las 9:30</p>
                  </MDBCardText>
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCard>

            <MDBRow>
              <MDBCol md="6" lg="12">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4 d-flex justify-content-between">
                      <div className="titleAppointmentDesign">
                        Consulta ortodoncía: 29-12-2023 a las 19:30
                      </div>
                    </MDBCardText>
                    <MDBCardText
                      className="mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Web Design
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={80} valuemin={0} valuemax={100} />
                    </MDBProgress>

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Website Markup
                    </MDBCardText>
                    <MDBProgress className="rounded">
                      <MDBProgressBar width={72} valuemin={0} valuemax={100} />
                    </MDBProgress>
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

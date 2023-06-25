import "./CardAppointmentDetail.css";
import React from "react";
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
  MDBTable,
  MDBTableHead,
} from "mdb-react-ui-kit";
import { CommentsCard } from "../CommentsCard/CommentsCard";


export const CardAppointmentDetail = () => {
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem className="menuFontDesign">
                Home
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem className="menuFontDesign">
                Perfil de Admin
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem className="menuFontDesignSelected">
                Visita en Detalle
              </MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4 pt-3">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://www.shareicon.net/data/512x512/2016/08/18/813847_people_512x512.png"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                                <p className="text-muted mb-1 mt-4">Dr. Jonathan Smith</p>

                <div className="d-flex justify-content-center mb-2 mt-3">
                  <div className="redesignButtonAlert">Eliminar</div>
                  <div className="redesignButton">Modificar</div>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="6">
                    <MDBCardText>Paciente</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="6">
                    <MDBCardText className="text-muted">
                      Johnatan Smith
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>

                <hr />
                <MDBRow>
                  <MDBCol sm="6">
                    <MDBCardText>Doctor</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="6">
                    <MDBCardText className="text-muted">
                      Alex Spencer{" "}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="6">
                    <MDBCardText>Cita concertada</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="6">
                    <MDBCardText className="text-muted">
                      29-09-2023 a las 19:30{" "}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />

                <MDBRow>
                  <MDBCol sm="6">
                    <MDBCardText>Teléfono Paciente</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="6">
                    <MDBCardText className="text-muted">
                      666 66 66 66{" "}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>

                <hr />

                <MDBRow>
                  <MDBCol sm="6">
                    <MDBCardText>Creacion</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="6">
                    <MDBCardText className="text-muted">
                      12-01-2023{" "}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="6">
                    <MDBCardText>Modificación</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="6">
                    <MDBCardText className="text-muted">
                      12-03-2023{" "}
                    </MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol lg="8">
          <MDBCol sm="6"  md="12" lg="12">
                <MDBCard className="mb-4 mb-md-0 ">
                  <MDBCardBody>
                    <MDBCardText className="mb-4 d-flex justify-content-between">
                      <div className="titleAppointmentDesign">Todos los comentarios </div>
                    </MDBCardText>
                    <MDBListGroupItem className="d-flex justify-content-center align-items-center p-3">
                  <form className="d-flex input-group w-100 mb-4">
                    <input
                      type="search"
                      className="form-control searchFormDesign"
                      placeholder=""
                      aria-label="Search"
                    />
                    <div className="redesignButtonSearchComment">Buscar comentario</div>
                  </form>
                </MDBListGroupItem>
                    <MDBTable align="middle" className="fontResizeAppointmentsTitle">
                      <MDBTableHead>
                        <tr>
                          <th scope="col">Usuario</th>
                          <th scope="col">Comentario</th>
                          <th scope="col">Creación</th>
                          <th scope="col">Detalle</th>
                        </tr>
                      </MDBTableHead>{" "}
                      <CommentsCard />
                    </MDBTable>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>


          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

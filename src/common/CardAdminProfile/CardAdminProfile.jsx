import React, { useEffect, useState } from "react";
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
  MDBTableBody,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { EmployeeCard } from "../EmployeeCard/EmployeeCard";
import { bringAllUsers, getOneUser } from "../../services/apiCall";
import { useSelector } from "react-redux";
import { userDataCheck } from "../../pages/userSlice";
import moment from "moment/moment";
import { FormEditProfile } from "../FormEditProfile/FormEditProfile";

export const CardAdminProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const credentialsRdx = useSelector(userDataCheck);
  const credentialCheck = credentialsRdx?.credentials?.token;
  const getMyProfile = () => {



    if (credentialsRdx?.credentials?.user?.roleId !== 3) {
      navigate("/");
      return;
    } else {
      getOneUser(credentialCheck)
        .then((res) => {
          console.log("Esto es el then de getOneUser");
          console.log(res);
          console.log("Esto es el nombre del usuario");
          console.log(res.data.data);
          if (res.data.data == "Token invalido" || !res.data.data) {
            navigate("/");
            return;
          } else {
            setUserData(res.data.data);
          }
        })
        .catch((error) => console.log(error));
    }
  };
  useEffect(() => {
    getMyProfile();
  }, [credentialsRdx]);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    bringAllUsers(credentialCheck)
      .then((resultados) => {
        setUsers(resultados.data.data);
        console.log(resultados)
      })
      .catch((error) => console.log(error));
  }, []);

  const [userEditModal, setUserEditeModal] = useState(false);

  const activateuserEditModal = () => setUserEditeModal(!userEditModal);
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
              <MDBBreadcrumbItem active>Perfil de Admin</MDBBreadcrumbItem>
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
                  src="https://w7.pngwing.com/pngs/812/462/png-transparent-account-avatar-profile-user-avatars-icon.png"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1 mt-4">
                  {userData.name} {userData.surname}
                </p>
                <p className="text-muted mb-4">
                  {" "}
                  Registro:{" "}
                  {moment(userData.createdAt).format("YYYY-MM-DD HH:mm")}
                </p>


                <div className="d-flex justify-content-center mb-2">

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

                {/* <div className="d-flex justify-content-center mb-2">
                  <div className="redesignButtonAdmin">Crear tratamiento</div>
                  <div className="redesignButtonAdmin">Crear empleado</div>
                </div>
                <div className="d-flex justify-content-center mb-2">
                  <div className="redesignButtonAdmin">Editar tratamiento</div>
                  <div className="redesignButtonAdmin">Editar empleado</div>
                </div> */}
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
                      {userData.name} {userData.surname}{" "}
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
                      {userData.phone}
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
                      {" "}
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
                      {" "}
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
                  {/* <form className="d-flex input-group w-100">
                    <input
                      type="search"
                      className="form-control searchFormDesign"
                      placeholder=""
                      aria-label="Search"
                    />
                    <div className="redesignButton2">Buscar usuario</div>
                  </form> */}
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCard>

            <MDBRow>
              <MDBCol sm="6" md="12" lg="12">
                <MDBCard className="mb-4 mb-md-0 ">
                  <MDBCardBody>
                    <MDBCardText className="mb-4 d-flex justify-content-between">
                      <div className="titleAppointmentDesign">
                        TODOS LOS USUARIOS
                      </div>
                    </MDBCardText>
                    <MDBTable
                      align="middle"
                      className="fontResizeAppointmentsTitle"
                    >
                      <MDBTableHead>
                        <tr className="allUserTitleDesign">
                          <th scope="col">Usuario</th>
                          <th scope="col">Rol</th>
                          <th scope="col">Email</th>
                          <th scope="col">Phone</th>
                          <th scope="col">DNI</th>
                          {/* <th scope="col">Detalle</th> */}
                        </tr>
                      </MDBTableHead>
                      {users.length > 0 ? (
                        users.map((user) => (
                          <EmployeeCard
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            surname={user.surname}
                            email={user.email}
                            cp={user.cp}
                            birth_date={user.birth_date}
                            createdAt={user.createdAt}
                            phone={user.phone}
                            avatar={user.avatar_img}
                            dni={user.dni}
                          />
                        ))
                      ) : (
                        <p>Loading...</p>
                      )}
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

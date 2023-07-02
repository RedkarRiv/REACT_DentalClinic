import { React, useState } from "react";
import "./LoginRegisterButtons.css";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBBtn,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import { FormLogin } from "../FormLogin/FormLogin";
import { FormRegister } from "../FormRegister/FormRegister";


export const LoginRegisterButtons = () => {
  const navigate = useNavigate();

  const [loginModal, setLoginModal] = useState(false);

  const activateLoginModal = () => setLoginModal(!loginModal);


  const [registerModal, setRegisterModal] = useState(false);

  const activateRegisterModal = () => setRegisterModal(!registerModal);


  return (
    <>
      <Nav.Link className="authLink" onClick={activateLoginModal}>
        Login
      </Nav.Link>

      <MDBModal show={loginModal} setShow={setLoginModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className="titleModalLogin">ACCESO USUARIOS</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
              <FormLogin />
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>


      <Nav.Link className="authLink" onClick={activateRegisterModal}>
        Registrarse
      </Nav.Link>


      <MDBModal show={registerModal} setShow={setRegisterModal} tabIndex="-1">
        <MDBModalDialog>
          <MDBModalContent className="marginRegisterModalDesign">
            <MDBModalHeader>
              <MDBModalTitle className="titleModalLogin">REGISTRO DE NUEVOS USUARIOS</MDBModalTitle>
            </MDBModalHeader>
            <MDBModalBody>
              <FormRegister />
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>




    </>
  );
};

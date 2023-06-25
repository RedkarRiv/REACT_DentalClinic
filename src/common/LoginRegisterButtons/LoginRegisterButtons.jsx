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


export const LoginRegisterButtons = () => {
  const navigate = useNavigate();

  const [loginModal, setLoginModal] = useState(false);

  const activateLoginModal = () => setLoginModal(!loginModal);

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
      <Nav.Link className="authLink" onClick={() => navigate("/register")}>
        Registrarse
      </Nav.Link>
    </>
  );
};

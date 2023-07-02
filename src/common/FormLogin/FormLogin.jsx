import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./FormLogin.css";
import { useNavigate } from "react-router-dom";
import { CheckError } from "../../services/useful";
import { loginMe } from "../../services/apiCall";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { login, userDataCheck } from "../../pages/userSlice";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBRadio,
} from "mdb-react-ui-kit";

export const FormLogin = () => {

const  [errorMessage, setErrorMessage] = useState("")  // Instancio Redux en modo lectura y escritura

  // Dispatch escritura
  const dispatch = useDispatch();

  // useSelector es para el modo de lectura
  const credentialsRdx = useSelector(userDataCheck);

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [credentialsError, setCredentialsError] = useState({
    emailError: "",
    passwordError: "",
  });

  const InputHandler = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const InputCheck = (e) => {
    let mensajeError = CheckError(e.target.name, e.target.value);

    setCredentialsError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: mensajeError,
    }));
  };

  const logMe = (e) => {
    e.preventDefault();

    loginMe(credentials)
      .then((resultado) => {
        let decoded = jwt_decode(resultado.data.token);
        let datosBackend = {
          token: resultado.data.token,
          user: decoded,
        };

        //Guardo en redux.....
        dispatch(login({ credentials: datosBackend }));
        setTimeout(() => {
          if (datosBackend.user.roleId == 3) {
            navigate("/managerprofile");
          } else {
            navigate("/userprofile");
          }
        }, 500);
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setErrorMessage(error.response.data.message)
      });
  };

  return (
    <Form className="formBackgroundDesign">
      <Form.Group className="mb-1 ps-3 pe-3 pt-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          className="textInput"
          placeholder="Introduce tu correo"
          name="email"
          onChange={(e) => InputHandler(e)}
          onBlur={(e) => InputCheck(e)}
        />
      </Form.Group>

      <Form.Group className="mb-1 ps-3 pe-3 pt-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          className="textInput"
          name="password"
          onChange={(e) => InputHandler(e)}
          onBlur={(e) => InputCheck(e)}
        />
      </Form.Group>
      <MDBRow>
        <MDBCol md="12" className="errorMessageDesign">
          <p md="12">{errorMessage}</p>
        </MDBCol>
      </MDBRow>
      <div className="m-3 d-flex justify-content-center">
        {" "}
        <button
          onClick={(e) => logMe(e)}
          type="submit"
          className="sendButtonRegisterDesign"
        >
          Enviar
        </button>
      </div>
    </Form>
  );
};

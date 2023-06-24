import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./FormLogin.css";
import { CaptchaCard } from "../CaptchaCard/CaptchaCard";
import { useNavigate } from "react-router-dom";
import { CheckError } from "../../services/useful";
import { loginMe } from "../../services/apiCall";
import jwt_decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { login, userDataCheck } from "../../pages/userSlice";

export const FormLogin = () => {
  // Instancio Redux en modo lectura y escritura

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

  const logMe = () => {
    console.log(credentialsRdx);

    console.log("Hola pepe");
    loginMe(credentials)
      .then((resultado) => {
        console.log("Esto es el then")
        let decoded = jwt_decode(resultado.data.token);

        let datosBackend = {
          token: resultado.data.token,
          user: decoded,
        };

        //Guardo en redux.....
        dispatch(login({ credentials: datosBackend }));

        setTimeout(() => {
        }, 1000);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Form>
      <div className="loginFormTitle">ACCESO USUARIOS</div>
      <Form.Group className="mb-1 ps-3 pe-3 pt-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          className={
            credentialsError.emailError === ""
              ? "textInput"
              : " textInput errorInput"
          }
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
          className={
            credentialsError.passwordError === ""
              ? "textInput"
              : " textInput errorInput"
          }
          name="password"
          onChange={(e) => InputHandler(e)}
          onBlur={(e) => InputCheck(e)}
        />
      </Form.Group>
      <Form.Group
        className="mb-1 ps-3 pe-3 pt-4 pb-3 d-flex justify-content-center"
        controlId="formBasicCheckbox"
      >
        <div className="catchaHomeContainer">
          <CaptchaCard />
        </div>
      </Form.Group>
      <div className="m-3 d-flex justify-content-center">
        {" "}
        <div
          onClick={logMe}
className="sendButtonDesign"
        >
          Enviar
        </div>  
      </div>
    </Form>
  );
};

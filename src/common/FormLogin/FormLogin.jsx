import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./FormLogin.css";
import { CaptchaCard } from "../CaptchaCard/CaptchaCard";
import { useNavigate } from "react-router-dom";
import { CheckError } from "../../services/useful";
import { loginMe } from "../../services/apiCall";
import jwt_decode from "jwt-decode";

export const FormLogin = () => {
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
    console.log("Hola pepe");
    loginMe(credentials)
      .then((resultado) => {
        let decoded = jwt_decode(resultado.data.token);

        setTimeout(() => {
          navigate("/");
        }, 1000);

        console.log(decoded);
        console.log(resultado);
        sessionStorage.setItem("token", resultado.data.token);
        console.log(resultado.data.token);
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
            credentialsError.emailError === "" ? "textInput" : " textInput errorInput"
          }
          placeholder="Introduce tu correo"
          name="email"
          onChange={(e)=>InputHandler(e)}
          onBlur={(e)=>InputCheck(e)}
        />
      </Form.Group>

      <Form.Group className="mb-1 ps-3 pe-3 pt-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          className={
            credentialsError.passwordError === "" ? "textInput" : " textInput errorInput"
          }
          name="password"
          onChange={(e)=>InputHandler(e)}
          onBlur={(e)=>InputCheck(e)}
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
        <Button variant="primary" type="submit" onClick={logMe} path="/" name={"Enviar"}>
          Enviar
        </Button>
      </div>
    </Form>
  );
};

import React, { useState, useEffect } from "react";
import "./LoginFormCard.css";
import { InputText } from "../InputText/InputText";
import { SendButton } from "../../common/SendButton/SendButton";
import { CheckError } from "../../services/useful";
import { loginMe } from "../../services/apiCall";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, userData } from "../userSlice";

export const LoginFormCard = ({ titleLogin }) => {
    //Instancio Redux en modo lectura y escritura

  //Dispatch escritura
  // const dispatch = useDispatch();

  //useSelector es para el modo de lectura
  // const credentialsRdx = useSelector(userData);


  //Instanciamos useNavigate dentro de la constante navigate
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





  // const logMe = () => {
  //   console.log("Hola pepe");
  //   loginMe(credentials)
  //     .then((resultado) => {
  //       let decoded = jwt_decode(resultado.data.token);
  //       let datosBackend = {
  //         token : resultado.data.token,
  //         user: decoded
  //       },
  //       dispatch(login({ credentials: datosBackend}))
  //       console.log(decoded),

  //       setTimeout(() => {
  //         navigate("/");
  //       }, 1000);

  //       console.log(decoded);
  //       console.log(resultado);
  //     })
  //     .catch((error) => console.log(error));
  // };







  return (
    <div className="simpleLoginCardDesign">
      <div className="loginFormContainer">
        <div className="loginFormTitle">
          <p>{titleLogin}</p>
        </div>
        <div className="inputNameDesign">Email</div>
        <InputText
          type={"email"}
          placeholder={""}
          name={"email"}
          classDesign={
            credentialsError.emailError === "" ? "textInput" : " textInput errorInput"
          }
          functionHandler={InputHandler}
          onBlurFunction={InputCheck}
        />
        <div className="errorText">{credentialsError.emailError}</div>

        <div className="inputNameDesign">Password</div>
        <InputText
          type={"password"}
          placeholder={""}
          name={"password"}
          classDesign={
            credentialsError.passwordError === "" ? "textInput" : "textInput errorInput"
          }
          functionHandler={InputHandler}
          onBlurFunction={InputCheck}
        />
        <div className="errorText">{credentialsError.passwordError}</div>
        <div>
          <SendButton path={"/"} name={"Enviar"} functionButton={logMe} />
          <p className="passForgot">Olvide la contraseña</p>
        </div>
      </div>
    </div>
  );
};

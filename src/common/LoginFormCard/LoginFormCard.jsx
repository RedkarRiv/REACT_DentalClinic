import React, { useState } from "react";
import "./LoginFormCard.css";
import { InputText } from "../InputText/InputText";
import { SendButton } from "../../common/SendButton/SendButton";

export const LoginFormCard = ({ titleLogin }) => {
  const [credentials, setCredentials] = useState({});

  const InputHandler = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
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
          classDesign={"InputText"}
          functionHandler={InputHandler}
        />
        <div className="inputNameDesign">Password</div>
        <InputText
          type={"password"}
          placeholder={""}
          name={"password"}
          classDesign={"InputText"}
          functionHandler={InputHandler}
        />
        <div>
        <SendButton path={"/"} name={"Enviar"} />
        <p className="passForgot">Olvide la contraseña</p>
        </div>
      </div>
    </div>
  );
};

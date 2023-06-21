import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./ContactFormCard.css";
import { InputText } from "../InputText/InputText";
import { SendButton } from "../SendButton/SendButton";
import { CaptchaCard } from "../CaptchaCard/CaptchaCard";

export const ContactFormCard = ({ titleContact }) => {
  const [credentials, setCredentials] = useState({});

  const InputHandler = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="simpleContactCardDesign d-flex align-content-center">
      <div className="contactFormContainer row">
        <div className="contactTitle col-12 d-flex justify-content-center">
          <p>{titleContact}</p>
        </div>
        <div className="inputNameDesign">Nombre</div>
        <InputText
          type={"name"}
          placeholder={""}
          name={"name"}
          classDesign={"inputText"}
          functionHandler={InputHandler}
          
        />
        <div className="inputNameDesign">Email</div>

        <InputText
          type={"email"}
          placeholder={""}
          name={"email"}
          classDesign={"inputText"}
          functionHandler={InputHandler}
        />
        <div className="inputNameDesign">Teléfono</div>

        <InputText
          type={"phone"}
          placeholder={""}
          name={"phone"}
          classDesign={"inputText"}
          functionHandler={InputHandler}
        />
        <div className="inputNameDesign">Codigo Postal</div>

        <InputText
          type={"address"}
          placeholder={""}
          name={"CP"}
          classDesign={"inputText"}
          functionHandler={InputHandler}
        />
        <div className="captchaContainer">
          <CaptchaCard />
        </div>
        <SendButton path={"/"} name={"Solicitar contacto"} />
      </div>
    </div>
  );
};

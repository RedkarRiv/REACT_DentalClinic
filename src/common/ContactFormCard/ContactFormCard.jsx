import React, { useState } from "react";
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
    <div className="simpleContactCardDesign">
      <div className="contactFormContainer">
        <div className="contactTitle">
          <p>{titleContact}</p>
        </div>
        <div className="inputNameDesign">Nombre</div>
        <InputText
          type={"name"}
          placeholder={""}
          name={"name"}
          classDesign={"InputText"}
          functionHandler={InputHandler}
          
        />
        <div className="inputNameDesign">Email</div>

        <InputText
          type={"email"}
          placeholder={""}
          name={"email"}
          classDesign={"InputText"}
          functionHandler={InputHandler}
        />
        <div className="inputNameDesign">Teléfono</div>

        <InputText
          type={"phone"}
          placeholder={""}
          name={"phone"}
          classDesign={"InputText"}
          functionHandler={InputHandler}
        />
        <div className="inputNameDesign">Codigo Postal</div>

        <InputText
          type={"address"}
          placeholder={""}
          name={"CP"}
          classDesign={"InputText"}
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

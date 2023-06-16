import React, { useState, useEffect } from "react";
import "./Home.css";
import logo from "./logo-removebg-preview.png";
import { InputText } from "../../common/InputText/InputText";
import { SendButton } from "../../common/SendButton/SendButton";

export const Home = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const InputHandler = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="homeDesign">
      <div className="slideHomeContainer">
        <div className="overlaySlideHome">
          <img className="logoOverlaySlideHome" src={logo} alt="Logo Home" />
        </div>
        <div className="overlaySlideHome2">
          <div className="addresContainer">
            <div className="mapContainer"></div>
            <div className="mapTitleContainer">📌 Calle Paleto Molares 13</div>
          </div>
        </div>
      </div>
      <div className="appointmentHomeContainer">
        <div className="appointmentHomeTitle">Pide tu primera cita</div>
        <div className="appointmentCardContainer">
          <InputText
            type={"name"}
            placeholder={"name..."}
            name={"name"}
            classDesign={"InputText"}
            functionHandler={InputHandler}
          />
          <InputText
            type={"email"}
            placeholder={"email..."}
            name={"email"}
            classDesign={"InputText"}
            functionHandler={InputHandler}
          />
          <InputText
            type={"date"}
            placeholder={"date..."}
            name={"date"}
            classDesign={"InputText"}
            functionHandler={InputHandler}
          />
          <InputText
            type={"service"}
            placeholder={"service..."}
            name={"service"}
            classDesign={"InputText"}
            functionHandler={InputHandler}
          />
          <SendButton path={"/"} name={"Enviar"} />
        </div>
      </div>
    </div>
  );
};

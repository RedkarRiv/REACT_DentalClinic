import React, { useState, useEffect } from "react";
import "./Home.css";
import logo from "./logo-removebg-preview.png";
import { InputText } from "../../common/InputText/InputText";
import { SendButton } from "../../common/SendButton/SendButton";
import { OptionButton } from "../../common/OptionButton/OptionButton";

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
            <div className="mapTitleContainer">
              {" "}
              <p>📌 Calle Paleto Molares 13,</p>
              <p>46005, Valencia.</p>
            </div>
          </div>
          <div className="specialitiesHomeContainer">
            <div className="specialityHomeContainer">
            <OptionButton path={"/"} name={"Halitosis"}  />
            </div>

            <div className="specialityHomeContainer">
            <OptionButton path={"/"} name={"Implantes dentales"}  />
            </div>

            <div className="specialityHomeContainer">
            <OptionButton path={"/"} name={"Ortodoncia"}  />
            </div>

            <div className="specialityHomeContainer">
            <OptionButton path={"/"} name={"Endodoncia"}  />
            </div>

            <div className="specialityHomeContainer">
            <OptionButton path={"/"} name={"Odontopediatría"}  />
            </div>

            <div className="specialityHomeContainer">
            <OptionButton path={"/"} name={"Protesis dental"}  />
            </div>

            <div className="specialityHomeContainer">
            <OptionButton path={"/"} name={"Cirugía oral"}  />
            </div>

            <div className="specialityHomeContainer">
            <OptionButton path={"/"} name={"Estética dental"}  />
            </div>
          </div>
        </div>
      </div>
      <div className="appointmentHomeContainer">
        <div className="appointmentCardContainer">
        <div className="appointmentHomeTitle"><p>¡Tu primera cita gratis!</p></div>
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

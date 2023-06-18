import React, { useState, useEffect } from "react";
import "./Home.css";
import logo from "../../assets/img/logo-removebg-preview.png";
import { OptionButton } from "../../common/OptionButton/OptionButton";
import { StatCard } from "../../common/StatCard/StatCard";
import { ContactFormCard } from "../../common/ContactFormCard/ContactFormCard";

export const Home = () => {
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
              <OptionButton path={"/"} name={"Halitosis"} />
            </div>

            <div className="specialityHomeContainer">
              <OptionButton path={"/"} name={"Implantes dentales"} />
            </div>

            <div className="specialityHomeContainer">
              <OptionButton path={"/"} name={"Ortodoncia"} />
            </div>

            <div className="specialityHomeContainer">
              <OptionButton path={"/"} name={"Endodoncia"} />
            </div>

            <div className="specialityHomeContainer">
              <OptionButton path={"/"} name={"Odontopediatría"} />
            </div>

            <div className="specialityHomeContainer">
              <OptionButton path={"/"} name={"Protesis dental"} />
            </div>

            <div className="specialityHomeContainer">
              <OptionButton path={"/"} name={"Cirugía oral"} />
            </div>

            <div className="specialityHomeContainer">
              <OptionButton path={"/"} name={"Estética dental"} />
            </div>
          </div>
        </div>
      </div>
      <div className="appointmentHomeContainer">
        <div className="appointmentInputCardContainer">
        <ContactFormCard titleContact={"Tu primera cita gratis"}/>
        </div>

<div className="phoneHomeContainer">
<div className="textPhoneHome">Llámanos al</div><div className="phoneLogoHome">✆
</div><div className="phoneHome">99 111 22 33
</div>
</div>
        <div className="stadisticsData">
          <div className="dataStat">
            <StatCard id="1" name="CLIENTES" data="+1200" />
          </div>
          <div className="dataStat">
            <StatCard id="1" name="CONSULTAS" data="+800" />
          </div>
          <div className="dataStat">
            <StatCard id="1" name="EXPERIENCIA" data="+15 años" />
          </div>
          <div className="dataStat">
            <StatCard id="1" name="SATISFACCIÓN" data="4.8/5" />
          </div>
        </div>
      </div>
    </div>
  );
};

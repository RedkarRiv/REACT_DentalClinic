import React from "react";
import "./Register.css";
import { RegisterFormCard } from "../../common/RegisterFormCard/RegisterFormCard";
import { SectionTitle } from "../../common/SectionTitle/SectionTitle";

export const Register = () => {
  return (
    <div className="registerDesign">
      <SectionTitle sectionTitle={"CREAR NUEVA CUENTA"} />
      <div className="registerCardContainer">
        <RegisterFormCard titleRegister={"RELLENA EL FORMULARIO"} />
      </div>
    </div>
  );
};
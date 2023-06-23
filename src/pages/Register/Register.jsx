import React from "react";
import "./Register.css";
import { RegisterFormCard } from "../../common/RegisterFormCard/RegisterFormCard";

export const Register = () => {
  return (
    <div className="registerDesign">
      <div className="registerCardContainer">
        <RegisterFormCard titleRegister={"RELLENA EL FORMULARIO"} />
      </div>
    </div>
  );
};
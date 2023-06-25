import React from "react";
import "./Register.css";
import { FormRegister } from "../../common/FormRegister/FormRegister";

export const Register = () => {
  return (
    <div className="registerDesign">
      <div className="registerCardContainer">
        <FormRegister/>
      </div>
    </div>
  );
};
import React from "react";
import "./Login.css";
import { SectionTitle } from "../../common/SectionTitle/SectionTitle";
import { LoginFormCard } from "../../common/LoginFormCard/LoginFormCard";

export const Login = () => {

return (
    <div className="loginDesign">
          <SectionTitle sectionTitle={"LOGIN USUARIO"}/>
      <div className="loginCardContainer">
        <LoginFormCard titleLogin={"ACCEDE A TU AREA CLIENTE"} />
      </div>
    </div>
)
}
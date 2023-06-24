import React, { useState } from "react";
import "./Login.css";
import { FormLogin } from "../../common/FormLogin/FormLogin";



export const Login = () => {
  return (
    <div className="loginbackground">
      <div className="loginFormLoginContainer">
        <FormLogin />
      </div>
    </div>
  );
};

import React from "react";
import "./LoginRegisterButtons.css";
import { useNavigate } from "react-router-dom";


export const LoginRegisterButtons = () => {
    const navigate = useNavigate();

  return (
    <>
      <div className="authLink" onClick={() => navigate("/login")}>
        Login
      </div>
      <div className="authLink" onClick={() => navigate("/register")}>
        Registrarse
      </div>
    </>
  );
};

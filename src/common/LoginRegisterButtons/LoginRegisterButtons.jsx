import React from "react";
import "./LoginRegisterButtons.css";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";

export const LoginRegisterButtons = () => {
  const navigate = useNavigate();

  return (
    <>
     
        <Nav.Link className="authLink" onClick={() => navigate("/login")}>
          Login
        </Nav.Link>
        <Nav.Link className="authLink" onClick={() => navigate("/register")}>
          Registrarse
        </Nav.Link>
    
    </>
  );
};

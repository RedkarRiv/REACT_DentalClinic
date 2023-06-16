import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import logo from "./logoTry-svg.png";

export const Header = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  return (
    <div className="headerDesign">
      <div className="menuDesign">
        <img className="logoHeader" src={logo} alt="Logo" onClick={() => navigate("/")} />
      </div>


      <div className="menuDesign">
        <div className="linksDesign">
          <div className="menuLink" onClick={() => navigate("/")}>
            Home
          </div>
          <div className="menuLink" onClick={() => navigate("/AboutUs")}>
            Preguntas frecuentes
          </div>
          <div className="menuLink" onClick={() => navigate("/OurTeam")}>
            Nuestro Equipo
          </div>
          <div className="menuLink" onClick={() => navigate("/Contact")}>
            Contacto
          </div>
        </div>
      </div>

      <div className="menuDesign">
        {token !== "" ? (
          <div>aqui si mostraríamos opciones de logeado....</div>
        ) : (
          <div className="linksDesign">
            <div className="authLink" onClick={() => navigate("/login")}>
              Login
            </div>
            <div className="authLink" onClick={() => navigate("/register")}>
              Register
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

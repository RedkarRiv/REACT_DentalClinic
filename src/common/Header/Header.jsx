import React, { useState, useEffect } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logoTry-svg.png";
import { ProfileButton } from "../ProfileButton/ProfileButton";
import { LoginRegisterButtons } from "../LoginRegisterButtons/LoginRegisterButtons";
import avatarImageLink from "../../assets/img/ProfileDefaultImage2.png";

export const Header = () => {
  const [token, setToken] = useState(sessionStorage.getItem("token") || "");
  const navigate = useNavigate();

  const Newtoken = sessionStorage.getItem("token");

  useEffect(() => {
    window.addEventListener("storage", setToken(Newtoken));
  }, [Newtoken]);


  return (
    <div className="headerDesign">
      <div className="menuDesign">
        <img
          className="logoHeader"
          src={logo}
          alt="Logo"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="menuDesign">
        <div className="linksDesign">
          <div className="menuLink" onClick={() => navigate("/")}>
            Home
          </div>
          <div className="menuLink" onClick={() => navigate("/AboutUs")}>
            Servicios{" "}
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
        {token ? (
          <div className="profileButtonContainer">
            {console.log("esto es el token perfil ", { token })}

            <ProfileButton avatarImage={avatarImageLink} />
          </div>
        ) : (
          <div className="authLinksDesign">
            {console.log("esto es el token ", { token })}
            <LoginRegisterButtons />
          </div>
        )}
      </div>
    </div>
  );
};

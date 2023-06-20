import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logoTry-svg.png";
import { ProfileButton } from "../ProfileButton/ProfileButton";
import { LoginRegisterButtons } from "../LoginRegisterButtons/LoginRegisterButtons";
import avatarImageLink from "../../assets/img/ProfileDefaultImage2.png";

export const Header = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

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
        {token !== "" ? (
          <div className="profileButtonContainer">
            <ProfileButton avatarImage={avatarImageLink} />
          </div>
        ) : (
          <div className="authLinksDesign">
            <LoginRegisterButtons />
          </div>
        )}
      </div>
    </div>
  );
};

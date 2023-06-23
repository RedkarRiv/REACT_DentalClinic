import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { ProfileButton } from "../ProfileButton/ProfileButton";
import { LoginRegisterButtons } from "../LoginRegisterButtons/LoginRegisterButtons";
import avatarImageLink from "../../assets/img/ProfileDefaultImage2.png";

export const Navbar2Boots = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(sessionStorage.getItem("token") || "");

  const Newtoken = sessionStorage.getItem("token");

  useEffect(() => {
    window.addEventListener("storage", setToken(Newtoken));
  }, [Newtoken]);
  return (
    <Navbar collapseOnSelect expand="lg" className="p-3" id="navbarRisaldent">
      <Navbar.Brand  onClick={() => navigate("/")} className="text-light">
        Risaldent{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="flex-row">
        <Nav className="w-100 d-flex justify-content-center">
          <Nav.Link className="text-light menuItem" onClick={() => navigate("/")}>
            Home
          </Nav.Link>
          <Nav.Link className="text-light menuItem" onClick={() => navigate("/myprofile")}>
            Nuestro equipo
          </Nav.Link>
          <Nav.Link className="text-light menuItem" onClick={() => navigate("/contact")}>
            Nuestra clínica
          </Nav.Link>
          <NavDropdown className="text-light menuItem" title="Servicios" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Especialidades</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Intervenciones</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Estética</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Pide cita!</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="loginDesignAjust ">
          {token ? (
            <div className="profileButtonContainer">
              {console.log("esto es el token perfil ", { token })}

              <ProfileButton avatarImage={avatarImageLink} />
            </div>
          ) : (
            <div className="authLinksDesign d-flex">
              {console.log("esto es el token ", { token })}
              <LoginRegisterButtons />
            </div>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

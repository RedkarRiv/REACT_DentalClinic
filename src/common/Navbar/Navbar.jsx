import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { ProfileButton } from "../ProfileButton/ProfileButton";
import { LoginRegisterButtons } from "../LoginRegisterButtons/LoginRegisterButtons";
import avatarImageLink from "../../assets/img/ProfileDefaultImage2.png";
import { useSelector } from "react-redux";
import { userDataCheck } from "../../pages/userSlice";

export const Navbar2Boots = () => {
  const navigate = useNavigate();
  const credentialsRdx = useSelector(userDataCheck);

  console.log("esto son las credenciales DE REDUX" + credentialsRdx);

  return (
    <Navbar collapseOnSelect expand="lg" className="p-3" id="navbarRisaldent">
      <Navbar.Brand
        onClick={() => navigate("/")}
        className="text-light logoSelectDesign"
      >
        Risaldent{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="flex-row">
        <Nav className="w-100 d-flex justify-content-center">
          <Nav.Link
            className="text-light menuItem"
            onClick={() => navigate("/")}
          >
            Home
          </Nav.Link>
          <Nav.Link
            className="text-light menuItem"
            onClick={() => navigate("/userprofile")}
          >
            Perfil Usuario
          </Nav.Link>
          <Nav.Link
            className="text-light menuItem"
            onClick={() => navigate("/employeeprofile")}
          >
            Perfil Doctor
          </Nav.Link>
          <Nav.Link
            className="text-light menuItem"
            onClick={() => navigate("/managerprofile")}
          >
            Perfil Admin
          </Nav.Link>
        </Nav>
        <Nav className="loginDesignAjust ">
          <div className="profileButtonContainer">
            <ProfileButton avatarImage={avatarImageLink} />
          </div>

          <div className="authLinksDesign d-flex">
            <LoginRegisterButtons />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";
import { StatCard } from "../../common/StatCard/StatCard";
import { ContactFormCard } from "../../common/ContactFormCard/ContactFormCard";
import { CallUsButton } from "../../common/CallUsButton/CallUsButton";
import { TreatmentCard } from "../../common/TreatmentCard/TreatmentCard";
import ortodoncia from "../../assets/img/ortodoncia.jpg";
import caries from "../../assets/img/caries.svg";
import esteticaDental from "../../assets/img/esteticaDental.svg";
import protesisDental from "../../assets/img/protesisDental.svg";
import odontopediatria from "../../assets/img/odontopediatria.svg";
import periodoncia from "../../assets/img/periodoncia.svg";
import dolorMaxilar from "../../assets/img/dolorMaxilar.svg";
import cirugiaOral from "../../assets/img/cirugiaOral.svg";
import { SectionTitle } from "../../common/SectionTitle/SectionTitle";
import { RegisterFormCard } from "../../common/RegisterFormCard/RegisterFormCard";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FormContact } from "../../common/FormContact/FormContact";

export const Home = () => {
  return (

<div className="homeBackground">
<div className="formContactContainer">
<FormContact/>


</div>

</div>


  );
};

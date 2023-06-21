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

export const Home = () => {
  return (
    <div className="homeDesign">
      <div className="slide1">
        <div className="slide11">
          <Container>
            <Row>
              <Col sm={6}>
              </Col>
            </Row>
          </Container>
          <div className="slide12 row d-flex flex-wrap m-0">
           
      </div>
        </div>
      </div>
    </div>
  );
};

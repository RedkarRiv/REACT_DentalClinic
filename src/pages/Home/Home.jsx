import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";
import { Col, Container, Row } from "react-bootstrap";
import { ServicesCard } from "../../common/ServicesCard/ServicesCard";

export const Home = () => {
  return (
    <Container fluid className="p-0 m-0">
      <Row className="imageSlide p-0 m-0 d-flex justify-content-around align-items-center">
      <Col className="cardSlide col-11 col-md-4 d-flex flex-column justify-content-between align-items-center">
      <Row className="w-100 p-0 my-2">
            <Col className="registerClaimDesign d-flex justify-content-center align-items-center">
            😁  Pide cita
            </Col>
          </Row>
          <Row className="w-100 p-0 my-2">
            <Col className="callUsDesign d-flex justify-content-center align-items-center">
            📞 900 00 00 00
            </Col>
          </Row>

          <Row className="serviceCardContainer d-flex flex-column justify-content-center align-items-center my-2">
            <Row className="titleServices d-flex justify-content-center align-items-center m-0">
              NUESTROS SERVICIOS
            </Row>
            <Row className="w-100 d-flex justify-content-around">
              <ServicesCard service_name="Cirujia máxilar" />
              <ServicesCard service_name="Endodoncía" />
            </Row>
            <Row className="w-100 d-flex justify-content-around">
              <ServicesCard service_name="Caries" />
              <ServicesCard service_name="Extracciones" />
            </Row>
            <Row className="w-100 d-flex justify-content-around">
              <ServicesCard service_name="Brackets" />
              <ServicesCard service_name="Reconstrucción" />
            </Row>

            <ServicesCard service_name="Dentaduras" />
          </Row>
        </Col>
        <Col className="colCheck pt-5 m-0 col-11 col-md-8 d-flex flex-column justify-content-end align-items-center"></Col>

      </Row>

      <Row className="USPCardContainer m-0 p-3 w-100">
        <Row className="w-100 d-flex justify-content-around align-items-center m-0 p-0">
          <Col className="teamCardDesign col-2">Equipo 1</Col>
          <Col className="teamCardDesign col-2">Equipo 1</Col>
          <Col className="teamCardDesign col-2">Equipo 1</Col>
          <Col className="teamCardDesign col-2">Equipo 1</Col>
        </Row>
      </Row>
    </Container>
  );
};

import React from "react";
import "./ServicesCard.css";
import { Row } from "react-bootstrap";

export const ServicesCard = ({ service_name }) => {
  return (
    <Row className="serviceCardDesign d-flex justify-content-center align-items-center p-1 mx-1 my-1">
      {service_name}
    </Row>
  );
};

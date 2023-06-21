import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./FormContact.css";
import { CaptchaCard } from "../../common/CaptchaCard/CaptchaCard";

export const FormContact = () => {
  return (
    <Form>
      <div className="loginFormTitle">ACCESO USUARIOS</div>
      <Form.Group className="mb-1 ps-3 pe-3 pt-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Introduce tu correo" />

      </Form.Group>

      <Form.Group className="mb-1 ps-3 pe-3 pt-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-1 ps-3 pe-3 pt-4 pb-3 d-flex justify-content-center" controlId="formBasicCheckbox">
        <div className="catchaHomeContainer">
          <CaptchaCard />
        </div>
      </Form.Group>
      <div className="m-3 d-flex justify-content-center">
        {" "}
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </div>
    </Form>
  );
};

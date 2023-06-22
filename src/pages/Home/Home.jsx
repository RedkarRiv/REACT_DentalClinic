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
import { FormLogin } from "../../common/FormLogin/FormLogin";
import { EmployeeCard } from "../../common/EmployeeCard/EmployeeCard";
import { bringAllUsers } from "../../services/apiCall";

export const Home = () => {
  const [users, setUsers] = useState([]);

    useEffect(() => {
      bringAllUsers()
        .then((resultados) => {
          setUsers(resultados.data.data);
        })
        .catch((error) => console.log(error));
    }, []);

  return (
    <div className="homeBackground">
      <div className="cardGridContainer row d-flex justify-content-center align-content-around">
      {users.length > 0 ? (
        users.map((user) => (
          <div className="employeeCardContainer col-lg-2 d-inline" key={user.id}>
            <EmployeeCard
              id={user.id}
              name={user.name}
              surname={user.surname}
              email={user.email}
              address={user.address}
              phone={user.phone}
            />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </div>
  );
};

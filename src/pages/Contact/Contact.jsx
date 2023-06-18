import React from "react";
import "./Contact.css";
import { ContactFormCard } from "../../common/ContactFormCard/ContactFormCard";
import { SectionTitle } from "../../common/SectionTitle/SectionTitle";

export const Contact = () => {
  return (
    <div className="contactDesign">
        <SectionTitle sectionTitle={"CONTACTO"}/>
      <div className="contactCardContainer">
        <ContactFormCard titleContact={"Formulario de contacto"} />
      </div>
    </div>
  );
};

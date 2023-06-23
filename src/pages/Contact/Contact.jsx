import React from "react";
import "./Contact.css";
import { ContactFormCard } from "../../common/ContactFormCard/ContactFormCard";

export const Contact = () => {
  return (
    <div className="contactDesign">
      <div className="contactCardContainer">
        <ContactFormCard titleContact={"Formulario de contacto"} />
      </div>
    </div>
  );
};

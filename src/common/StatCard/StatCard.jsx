import React, { useEffect } from "react";
import "./StatCard.css";
import greenCheckSeal from "../../assets/img/greenCheck.svg";

// name, imagen_link, brand, price
export const StatCard = ({ name, data, id }) => {
  const notFound = "https://cdn5.dibuixos.cat/dibuixos/pintar/dent-sana_2.png";

  return (
    <div className="StatCardDesign">
      <div className="cardElement">
        <img
          className="pictureDesign"
          src={greenCheckSeal || notFound}
          alt={id}
        ></img>
      </div>
      <div className="cardTextElement">
        <div className="cardElement cardDataElement">{data}</div>
        <div className="cardElement">{name}</div>
      </div>
    </div>
  );
};

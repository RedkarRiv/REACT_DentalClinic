import React, { useEffect } from "react";
import "./TreatmentCard.css";

export const TreatmentCard = ({id, img_name, img_link, treatmentTitle, treatmentDescription}) => {
  return (
    <div className="TreatmentCardDesign" id={id}>
      <div className="treatmentImage">
      <img className="treatmentImageDesign" src= {img_link}  alt={img_name}></img>

      </div>
      <div className="treatmentText">
        <div className="treatmentTitle">{treatmentTitle}</div>
        <div className="treatmentDescription">{treatmentDescription}</div>
      </div>
    </div>
  );
};

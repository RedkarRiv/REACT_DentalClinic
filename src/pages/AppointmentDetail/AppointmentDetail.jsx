import React from "react";
import "./AppointmentDetail.css";
import { CardAppointmentDetail } from "../../common/CardAppointmentDetail/CardAppointmentDetail";

export const AppointmentDetail = () => {
  return (
    <>
      <div className="userProfileContainer">
        <div className="cardUserProfileContainer">
          <CardAppointmentDetail />
        </div>
      </div>
    </>
  );
};
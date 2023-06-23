import React from "react";
import "./UserDetail.css";
import { CardUserDetail } from "../../common/CardUserDetail/CardUserDetail";

export const UserDetail = () => {
  return (
    <>
      <div className="userProfileContainer">
        <div className="cardUserProfileContainer">
          <CardUserDetail />
        </div>
      </div>
    </>
  );
};
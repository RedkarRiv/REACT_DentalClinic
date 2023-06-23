import React from "react";
import "./AdminProfile.css";
import { CardUserProfile } from "../../common/CardUserProfile/CardUserProfile";

export const AdminProfile = () => {
  return (
    <>
      <div className="userProfileContainer">
        <div className="cardUserProfileContainer">
          <CardUserProfile />
        </div>
      </div>
    </>
  );
};

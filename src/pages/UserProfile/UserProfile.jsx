import React from "react";
import "./UserProfile.css";
import { CardUserProfile } from "../../common/CardUserProfile/CardUserProfile";

export const UserProfile = () => {
  return (
    <div className="userProfileBackground">
      <div className="userProfileContainer">
        <div className="cardUserProfileContainer">
          <CardUserProfile />
        </div>
      </div>
    </div>
  );
};

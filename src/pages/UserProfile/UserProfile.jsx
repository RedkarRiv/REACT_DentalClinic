import React, { useState } from "react";
import "./UserProfile.css";
import { CardUserProfile } from "../../common/CardUserProfile/CardUserProfile";


export const UserProfile = () => {
  return (
    <>
      <div className="userProfileContainer">
        <div className="cardUserProfileContainer">
            <CardUserProfile/>
        </div>
      </div>
    </>
  );
};

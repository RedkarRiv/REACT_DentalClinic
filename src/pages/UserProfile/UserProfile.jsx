import React, { useState } from "react";
import "./UserProfile.css";
import { CardUserProfile } from "../../common/CardUserProfile/CardUserProfile";
import { useSelector } from "react-redux";
import { login, userDataCheck } from "../userSlice";

export const UserProfile = () => {
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

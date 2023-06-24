import React from "react";
import "./AdminProfile.css";
import { CardUserDetail } from "../../common/CardUserDetail/CardUserDetail";
import { CardAdminProfile } from "../../common/CardAdminProfile/CardAdminProfile";

export const AdminProfile = () => {
  return (
    <>
      <div className="adminProfileContainer">
        <div className="cardAdminProfileContainer">
          <CardAdminProfile/>
        </div>
      </div>
    </>
  );
};

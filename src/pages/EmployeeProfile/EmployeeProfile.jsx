import React from "react";
import "./EmployeeProfile.css";
import { CardEmployeeProfile } from "../../common/CardEmployeeProfile/CardEmployeeProfile";

export const EmployeeProfile = () => {
  return (
    <>
      <div className="employeeProfileContainer">
        <div className="cardEmployeeProfileContainer">
          <CardEmployeeProfile />
        </div>
      </div>
    </>
  );
};

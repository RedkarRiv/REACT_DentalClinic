import React from "react";
import "./CallUsButton.css";
import { useNavigate } from "react-router-dom";

export const CallUsButton = ({ path, name }) => {
  const navigate = useNavigate();

  return (
      <div className="phoneHomeContainer" onClick={() => navigate(path)}>
        <div className="textPhoneHome">Llámanos al</div>
        <div className="phoneLogoHome">✆</div>
        <div className="phoneHome">99 111 22 33</div>
      </div>
  );
};

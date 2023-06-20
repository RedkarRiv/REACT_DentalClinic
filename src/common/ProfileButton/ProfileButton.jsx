import React from "react";
import "./ProfileButton.css";
import defaultProfileImage from "../../assets/img/ProfileDefaultImage2.png";
import {SendButton} from "../SendButton/SendButton"
import { useNavigate } from "react-router-dom";



export const ProfileButton = ({avatarImage}) => {
    const navigate = useNavigate();

    const logoutBeta = () => {
        return(
        sessionStorage.removeItem("token"),        
        window.location.href = "http://localhost:5173/"
        )
    }

    return(
  <div className="profileButtonCardDesign">
    <div className="profileAvatar">
        <div className="avatarImage">
        <img
          className="avatarImageDesign"
          src={avatarImage ? avatarImage : defaultProfileImage}
          alt="Avatar Profile Image"
          onClick={() => navigate("/")}
        />
            </div>
            <div className="profileName">ÁREA CLIENTE</div>

    </div>
    <div className="logoutButtonContainer">
    <div className="profileLogOut" onClick={()=>logoutBeta()}>Logout</div>
        
        
</div>
  </div>)
};

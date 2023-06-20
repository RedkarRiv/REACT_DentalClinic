import React from "react";
import "./ProfileButton.css";
import defaultProfileImage from "../../assets/img/ProfileDefaultImage2.png";




export const ProfileButton = ({avatarImage}) => {

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
    </div>
    <div className="profileName">ÁREA DE CLIENTE</div>
    <div className="profileLogOut">Logout</div>

  </div>)
};

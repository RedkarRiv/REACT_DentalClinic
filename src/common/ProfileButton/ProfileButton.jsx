import React from "react";
import "./ProfileButton.css";
import defaultProfileImage from "../../assets/img/ProfileDefaultImage2.png";
import { useNavigate } from "react-router-dom";
import { userout } from "../../pages/userSlice";
import { useDispatch  } from "react-redux";


export const ProfileButton = ({avatarImage}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logOut = () => {
      dispatch(userout());
    };


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
    <div className="profileLogOut" onClick={()=>logOut()}>Logout</div>
        
        
</div>
  </div>)
};

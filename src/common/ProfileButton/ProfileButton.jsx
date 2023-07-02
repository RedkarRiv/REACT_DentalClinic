import React, { useState, useEffect } from "react";
import "./ProfileButton.css";
import defaultProfileImage from "../../assets/img/ProfileDefaultImage2.png";
import { useNavigate } from "react-router-dom";
import { userout } from "../../pages/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { userDataCheck } from "../../pages/userSlice";

export const ProfileButton = ({ avatarImage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newName, setNewName] = useState("Usuario");

  const credentialsRdx = useSelector(userDataCheck);

  useEffect(() => {
    if (!credentialsRdx.credentials.user) {
      setNewName("Usuario")
      
    } else {
      setNewName(credentialsRdx.credentials.user.email);
    }
  }, [credentialsRdx]);
  const logOut = () => {
    dispatch(userout());
  navigate("/")
  };
console.log(credentialsRdx?.credentials?.user?.roleId)
  return (
    <div className="profileButtonCardDesign">
      <div className="profileAvatar ps-2 pe-2"  onClick={
              credentialsRdx?.credentials?.user?.roleId == 3 ?
              () => navigate("/managerprofile")
              :
              () => navigate("/userprofile")
            }>
        <div className="avatarImage">
          <img
            className="avatarImageDesign"
            src={avatarImage ? avatarImage : defaultProfileImage}
            alt="Avatar Profile Image"
          />
        </div>
        <div className="profileName">ÁREA CLIENTE</div>
      </div>
      <div className="userNavbarName">
        <p>{newName}</p>
      </div>

      <div className="logoutButtonContainer">
        <div className="profileLogOut" onClick={() => logOut()}>
          Logout
        </div>
      </div>
    </div>
  );
};

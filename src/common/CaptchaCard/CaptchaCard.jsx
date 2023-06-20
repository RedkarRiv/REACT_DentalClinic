import React, { useState } from "react";
import "./CaptchaCard.css";
import logoCaptcha from "../../assets/img/RecaptchaLogo.svg.png";

export const CaptchaCard = () => {
  const [captchaGreenCheck, setcaptchaGreenCheck] = useState(false);

  const UpdateCaptcha = () => {
    setcaptchaGreenCheck(true)
    };



  return (
    <div className="captchaCardDesign">
        {console.log(captchaGreenCheck.verifycaptcha)}
      <div
        className={
          captchaGreenCheck === false
            ? "checkCaptcha"
            : "checkCaptchaVerify"
        }
        onClick={UpdateCaptcha}  
      ></div>
      <div className="textCaptcha">No soy un robot</div>
      <div className="logoCaptcha">
        <img
          className="logoCaptchaDesign"
          src={logoCaptcha}
          alt="Logo Captcha"
        />
      </div>
    </div>
  );
};

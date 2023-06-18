import React from "react";
import "./CaptchaCard.css";
import logoCaptcha from "../../assets/img/RecaptchaLogo.svg.png"

export const CaptchaCard = () => {

    return (
        <div className="captchaCardDesign">
            <div className="checkCaptcha"></div>
            <div className="textCaptcha">No soy un robot</div>
            <div className="logoCaptcha">
            <img className="logoCaptchaDesign" src={logoCaptcha} alt="Logo Captcha" />
            </div>
        </div>
    )
    
    }
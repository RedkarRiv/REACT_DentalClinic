import React from "react";
import "./Footer.css";

export const Footer = () => {
  const handleSignatureClick = () => {
    window.open("https://github.com/RedkarRiv");
  };
  return (
    <div className="footerDesign">
      <div className="footerElements">
        <div className="footerElement">Aviso legal</div>
        <div className="footerElement">Política de privacidad</div>
        <div className="footerElement">Cookies</div>
      </div>
      <div id="mySignature" onClick={(e) => handleSignatureClick(e)}>
        <div className="signatureName">Designed by</div>
        <div className="signatureLogo">✌</div>
        <div className="signatureName">Redkar</div>
      </div>
    </div>
  );
};

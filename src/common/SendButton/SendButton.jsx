import React from "react";
import "./SendButton.css";

export const SendButton = ({path, name, functionButton}) => {
// INSTANCIO useNavigate

return (
    <div className="sendButtonDesign" onClick={functionButton} path={path}
    >{name}</div> 
)
}
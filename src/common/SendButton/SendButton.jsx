import React from "react";
import "./SendButton.css";
import { useNavigate } from "react-router-dom";

export const SendButton = ({path, name}) => {
// INSTANCIO useNavigate
const navigate = useNavigate()

return (
    <div className="changeViewDesign" onClick={()=>navigate(path)}
    >{name}</div>
)
}
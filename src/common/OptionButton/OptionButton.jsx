import React from "react";
import "./OptionButton.css";
import { useNavigate } from "react-router-dom";

export const OptionButton = ({path, name}) => {
// INSTANCIO useNavigate
const navigate = useNavigate()

return (
    <div className="optionButtonDesign" onClick={()=>navigate(path)}
    >{name}</div>
)
}
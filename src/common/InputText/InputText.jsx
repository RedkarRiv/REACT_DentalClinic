import React from "react"
import "./InputText.css"

export const InputText = ({type, placeholder, name, classDesign, functionHandler}) => {

    return (
        <>
            <input className= {classDesign} type={type} placeholder={placeholder} name={name} onChange={(e)=>functionHandler(e)}/>
        </>
    )

}
import React, {useEffect} from "react";
import "./ProductCard.css";

// name, imagen_link, brand, price
export const ProductCard = ({image_link, price, brand, name, id}) => {
const notFound = "https://lendan.com/wp-content/uploads/2017/11/BODEGON_infinitime-300x300.png"

    return (
        <div className="ProductCardDesign">
            <div className="cardImage">
                <img className="pictureDesign" src= {image_link || notFound}  alt={id}></img>
            </div>
            <div className="cardText">{name}</div>
            <div className="cardText">{brand}</div>
            <div className="cardText">{price}</div>
        </div>
    )
    
    }
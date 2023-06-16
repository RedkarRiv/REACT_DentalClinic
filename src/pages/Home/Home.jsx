import React, { useState, useEffect } from "react";
import "./Home.css";
import { bringProducts } from "../../services/apiCall";
import { ProductCard } from "../../common/ProductCard/ProductCard";

export const Home = () => {
  const [products, setProducts] = useState([]);

  return (
    <div className="homeDesign">
      <div className="slideHomeContainer"></div>
      <div className="appointmentHomeContainer">
        <div className="appointmentHomeTitle">Pide tu primera cita</div>
        <div className="appointmentCardContainer"></div>
      </div>
    </div>
  );
};

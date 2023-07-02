import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";
import { EmployeeCard } from "../../common/EmployeeCard/EmployeeCard";
import { bringAllUsers } from "../../services/apiCall";

export const Home = () => {
  const [users, setUsers] = useState([]);

    useEffect(() => {
      bringAllUsers()
        .then((resultados) => {
          setUsers(resultados.data.data);
        })
        .catch((error) => console.log(error));
    }, []);
    
  return (
    <div className="homeBackground">





    </div>
  );
};

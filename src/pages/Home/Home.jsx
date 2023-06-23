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
      <div className="gridContainer">
      <div className="cardGridContainer">
      {users.length > 0 ? (
        users.map((user) => (
          <div className="employeeCardContainer" key={user.id}>
            <EmployeeCard
              id={user.id}
              name={user.name}
              surname={user.surname}
              email={user.email}
              address={user.address}
              phone={user.phone}
            />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
      </div>
      </div>
    </div>
  );
};

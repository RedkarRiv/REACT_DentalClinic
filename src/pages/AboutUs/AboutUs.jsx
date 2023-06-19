import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import { ProductCard } from "../../common/ProductCard/ProductCard";




export const AboutUs = () => {
    //   const [allUsers, setProducts] = useState([]);

    //   useEffect(() => {
    //     if (allUsers.length === 0) {
    //       //Me traes los productos porque ahora mismo no tengo N A D A

    //       bringProducts()
    //         .then((resultados) => {
    //           setProducts(resultados.data.results);
    //         })
    //         .catch((error) => console.log(error));
    //     }
    //   }, [allUsers]);
    //   return (
    //     <div className="aboutUsDesign">
    //       <div className="homeDesign">
    //         {allUsers.length > 0 ? (
    //           <div className="carlosManda">
    //             {allUsers.slice(0, 20).map((product) => {
    //               return (
    //                 <div key={product.id}>
    //                   <ProductCard
    //                     id={product.id}
    //                     name={product.name}
    //                     surname={product.surname}
    //                     email={product.email}
    //                   />
    //                 </div>
    //               );
    //             })}
    //           </div>
    //         ) : (
    //           <div>CARGANDO...</div>
    //         )}
    //       </div>
    //     </div>
    //   );
};

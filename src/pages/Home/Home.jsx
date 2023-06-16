import React, {useState, useEffect} from "react";
import "./Home.css";
import { bringProducts } from "../../services/apiCall";
import { ProductCard } from "../../common/ProductCard/ProductCard";

export const Home = () => {
const [products, setProducts] = useState([])

    // useEffect(() => {
    // if(products.length===0){
    //     bringProducts()
    //         .then(
    //             resultados => {
    //                 setProducts(resultados.data)
    //             }
    //         )
    //         .catch(error => console.log(error))
    // }
    // },[products])


return (
    <div className="homeDesign">
        {/* {
            products.length > 0 
                ? (
                    <div className="cardStructure">
                        {
                            products.slice(0,20).map(
                                product => {
                                    return (
                                        <div key= {product.id} >
                                            < ProductCard
                                                id={product.id}
                                                name={product.name}
                                                image_link={product.image_link}
                                                price={product.price} 
                                                brand={product.brand}
                                            />
                                        </div>
                                    )
                                }
                            )
                        }
                    </div>
                )
                : 
                (
                    <div>CARGANDO...</div>
                )
            } */}
    </div>
)

}
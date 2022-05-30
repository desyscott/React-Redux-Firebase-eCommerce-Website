import React from "react"
import "./Products.css"
import {productsData} from "./ProductsData"
import Fade from 'react-reveal/Fade';


const Products=()=>{
    return(
        <>
        <div className="ProductContainer">
            <div  className="ProductHeading">Our Products</div>
            <div className="ProductWrapper">
                {productsData.map((product,index)=>{
                    return(
                        <Fade left big>
                    <div className="ProductCard" key={index}>
                        <img className="ProductImg" src={product.img} alt={product.alt}/>
                        <Fade bottom big>
                        <p className="ProductInfo">
                      <p className="ProductTitle">{product.name}</p>
                      <p className="ProductDesc">{product.desc}</p>
                      <p  className="ProductPrice">{product.price}</p>
                      <button className="ProductBtn">{product.button}</button>
                        </p>   
                        </Fade>
                    </div>
                    </Fade>
                )})}
            </div>
        </div>
        </>
    )


}

export default Products;
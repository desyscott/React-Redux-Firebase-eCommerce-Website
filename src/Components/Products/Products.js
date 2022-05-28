import React from "react"
import "./Products.css"
import {productsData} from "./ProductsData"


const Products=()=>{
    return(
        <>
        <div className="ProductsContainer">
            <div  className="ProductsHeading">choose your favorite</div>
            <div className="ProductWrapper">
                {productsData.map((product,index)=>{
                    return(
                    <div className="ProductCard" key={index}>
                        <img className="ProductImg" src={product.img} alt={product.alt}/>
                        <p className="ProductInfo">
                      <p className="ProductTitle">{product.name}</p>
                      <p className="ProductDesc">{product.desc}</p>
                      <p  className="ProductPrice">{product.price}</p>
                      <button className="ProductBtn">{product.button}</button>
                        </p>
                    </div>
                )})}
            </div>
        </div>
        </>
    )


}

export default Products;
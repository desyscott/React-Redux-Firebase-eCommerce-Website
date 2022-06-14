import React from 'react'
import "./product.css"


const  product =({imageUri,title,price, documentID})=>{
    if( !title ||  !imageUri  || typeof 
        price ==="undefined") return null
    
    const configAddToCart ={
        type:"button"
    }
    
            return(
                <div key={ documentID} className="product-wrapper">
                <div className="image-wrapper">
                <img src={imageUri} alt="" className="image"/>
                </div>
                <div className="details">
               <p className="name">
                            {title}
                            </p>
                       
                            <p className="price">
                           $ {price}
                            </p>
                            <div className="addToCart">
                        <button className="btn cartBtn" {...configAddToCart}>Add to cart</button>
                        </div>
                </div>
                </div>
            )

}

export default product

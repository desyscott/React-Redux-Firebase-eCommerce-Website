import React from 'react'
import "./product.css"
import {Link,useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"
import {addProduct } from "../../Redux/Reducer/cartsReducer/cartAction"

const  Product =(product)=>{
    const history=useHistory()
    const dispatch = useDispatch()
    const {productName,productImg,productPrice, documentID}=product
    
    if(!documentID || !productName ||  !productImg  || typeof 
        productPrice ==="undefined") return null
    
    const configAddToCart ={
        type:"button"
    }

    const handleAddToCart=(product)=>{
        if(!product) return;
        dispatch(addProduct(product));
        history.push("/cart");
    }
    
            return(
                <div key={ documentID} className="product-wrapper">
                <Link to={`/productDetails/${documentID}`}>
                <div className="image-wrapper">
                <img src={productImg} alt="" className="image"/>
                </div>
                </Link>
                
                <div className="details">
                   <Link to={`/productDetails/${documentID}`}>
                          <p className="name">
                            {productName}
                            </p>
                            </Link>
                       
                            <p className="price">
                           $ {productPrice}
                            </p>
                            <div className="addToCart">
  <button className="btn cartBtn" {...configAddToCart} onClick={()=>handleAddToCart(product)}>Add to cart</button>
                        </div>
                </div>
                </div>
            )

}

export default Product

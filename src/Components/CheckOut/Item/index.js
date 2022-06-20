import React from 'react'
import {useDispatch} from "react-redux"
import {reduceCarItem,removeCartItem, addProduct } from "../../Redux/Reducer/cartsReducer/cartAction"
import {FaGreaterThan,FaLessThan} from "react-icons/fa"
import "../index.css"


const Item=(product) =>{
      const dispatch =useDispatch()
  
    const {productImg,productName,productPrice,quantity,documentID}=product
    
    const handleRemoveCartItem=(documentID)=>{
      dispatch(removeCartItem({documentID}))
    }
    
    
    const handleIncreaseProduct=(product)=>{
      dispatch( addProduct(product))
    }
    
    const handleDecreaseProduct=(product)=>{
      dispatch(reduceCarItem(product))
    }
    
  return (
    <div className="cartItem">
    <div>
    <img src={productImg} alt={productName} className="cart-Img"/>
    </div>
    <div className="cartDetails">
   <p>{productName}</p> 
    </div>
    <div className="cartDetails">
     <FaLessThan className="cartBtnIcon" onClick={()=>handleDecreaseProduct(product)}/>
     <p className="productQty">{quantity}</p>
  <FaGreaterThan className="cartBtnIcon" onClick={()=>handleIncreaseProduct(product)}/>
    </div>
    <div className="cartDetails">

   <p> $ {productPrice}</p>

    </div>
    <div>
    <span className="remove-cart" onClick={()=>handleRemoveCartItem(documentID)}>X</span>
    </div>
    </div>
  )
}

export default  Item
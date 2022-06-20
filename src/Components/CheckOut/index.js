import React from "react"
import {useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import {createStructuredSelector} from "reselect"
import {selectCartItems, selectCartTotal} from "../Redux/Reducer/cartsReducer/cartSelector"
import Item from "./Item/index"
import "./index.css"

const mapState =createStructuredSelector({
    cartItems: selectCartItems,
    TotalAmount:selectCartTotal
})
const CheckOut =({})=>{
    const history=useHistory()
     const { cartItems, TotalAmount} =useSelector( mapState)
 
  const ErrMessage="You have no item in your cart."
 
    return(
        <>
        <div className="cart-container">
        <h1>Check out</h1>
        <div className="cartWrapper">
        {cartItems.length >0 ? 
            (
                <>
                <div className="cart-headings">
        <h3>Product</h3>
        <h3>Name</h3>
        <h3>Quantity</h3>
        <h3>Price</h3>
        <h3>Remove</h3>
        </div>
        {cartItems.map((item)=>{
            return(
                <Item {...item}/>
            )
        })}
     <div>
        <div className="Total-amount">
        <h3>Total: ${TotalAmount} </h3>
        </div>
        <div className="BtnWrapper">
        <button className="btn" onClick={()=>history.goBack()}>continue shopping</button>
        <button className="btn">checkout</button>
        </div>
        </div>
        </> ):
            <div>
            <p>{ErrMessage}</p>
            </div>
         
         
         }
       
        </div>
        </div>
           </>
           )
}

export default CheckOut;
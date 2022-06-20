import {createSelector} from "reselect"


// getting our  reducer state
export const selectCartData =(state)=>state.cartData;

// getting our cartItems state
export const selectCartItems =createSelector(
    [ selectCartData],
    cartData=>cartData.cartItems 
)

//Selector to find out how many unique items we have in our cart state
export const selectCartItemCount =createSelector(
    [ selectCartItems],
    cartItems=>
    cartItems.reduce(
        (quantity,cartItem)=>
        quantity + cartItem.quantity
        , 0 )
       
)

export const selectCartTotal =createSelector(
    [ selectCartItems],
    cartItems=>cartItems.reduce((quantity, cartItem)=>
         //quantity : is the  accumulator we set
            quantity + cartItem.quantity * cartItem.productPrice, 0)
)

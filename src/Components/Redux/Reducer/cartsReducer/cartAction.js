import cartTypes from "./cartTypes";


export const addProduct =(nextCartItem)=>({
    type:cartTypes.ADD_TO_CART,
    payLoad:nextCartItem
})

export const removeCartItem=(cartItem)=>({
    type:cartTypes.REMOVE_CART_ITEM,
    payLoad:cartItem
})

export const reduceCarItem=(cartItem)=>({
    type:cartTypes.REDUCE_CART_ITEM,
    payLoad:cartItem
})
import cartTypes from "./cartTypes";
import { handleAddToCart,handleReduceCartItem, handleRemoveCartItem} from "./cartUtils"


const INITIAL_STATE={
    cartItems:[]
};


const addToCartReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case cartTypes.ADD_TO_CART:
        return{
            ...state,
            cartItems:handleAddToCart({
                prevCartItems:state.cartItems,
                nextCartItem:action.payLoad,
            })
        }
        
        case cartTypes.REDUCE_CART_ITEM:
        return{
            ...state,
            cartItems:handleReduceCartItem({
                     prevCartItems:state.cartItems,
                     cartItemToReduce:action.payLoad
            })
        }
        
        
        case cartTypes.REMOVE_CART_ITEM:
        return{
            ...state,
            cartItems: handleRemoveCartItem({
                prevCartItems:state.cartItems,
                cartItemToRemove:action.payLoad})
        }
        
        default :return state
    }   
}
export default addToCartReducer 
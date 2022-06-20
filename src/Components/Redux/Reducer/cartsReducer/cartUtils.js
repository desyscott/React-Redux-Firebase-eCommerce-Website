
export const exitingCartItem=({prevCartItems,nextCartItem})=>{
    return prevCartItems.find(
        cartItem=>cartItem.documentID === nextCartItem.documentID
    )
}


export const handleAddToCart=({prevCartItems,nextCartItem})=>{
    const quantityIncrement =1;
    
            const cartItemExits = exitingCartItem({prevCartItems,nextCartItem})
            if(cartItemExits){
                return prevCartItems.map(cartItem=>
                    cartItem.documentID === nextCartItem.documentID ?
                        {
                            ...cartItem,
                            quantity:cartItem.quantity + quantityIncrement
                        }: cartItem
                )
            }
    
    return[
       ...prevCartItems,
     {  
      ...nextCartItem,
       quantity: quantityIncrement 
      }
    ]
}


export const handleRemoveCartItem=({ prevCartItems,cartItemToRemove})=>{
    //it will filter and bring out the items that is not equal to the documentID of the item to be remove
    return prevCartItems.filter(item=>item.documentID !== cartItemToRemove.documentID)
}


export const handleReduceCartItem =({prevCartItems,cartItemToReduce})=>{
     const existingCartItem= prevCartItems.find(cartItem=>cartItem.documentID === cartItemToReduce.documentID);
     
     if(existingCartItem.quantity === 1){
       return  prevCartItems.filter(cartItem=>cartItem.documentID !== existingCartItem.documentID)
     }
     
     
     return prevCartItems.map(cartItem=>
                              cartItem.documentID === existingCartItem.documentID ?
                              {
                                  ...cartItem,
                                  quantity: cartItem.quantity -1
                              }:cartItem
                              )  
}
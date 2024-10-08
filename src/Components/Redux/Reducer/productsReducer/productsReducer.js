import productsTypes from "./productsTypes";


const INITIAL_STATE={
    products:[],
    product:{}
};


const productsReducer=(state =INITIAL_STATE,action)=>{
    switch(action.type){
         case productsTypes.SET_PRODUCTS_START:
         return{
             ...state,
           products:action.payLoad
         }
         
         case productsTypes.SET_PRODUCT:
         return{
             ...state,
             product:action.payLoad
         }
         default:return state
    }
}

export default productsReducer;
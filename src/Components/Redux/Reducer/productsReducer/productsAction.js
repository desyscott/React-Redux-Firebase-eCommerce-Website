import productsTypes from "./productsTypes"


export const addNewProducts =productsData=>
   ({
        type:productsTypes.ADD_NEW_PRODUCTS,
        payLoad:productsData
 })

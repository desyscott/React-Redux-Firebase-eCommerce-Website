import productsTypes from "./productsTypes"


export const addNewProductsStart =productsData=>
   ({
        type:productsTypes.ADD_NEW_PRODUCTS_START,
        payLoad:productsData
 })

export const fetchProductsStart=(filter={})=>({
   type:productsTypes.FETCH_PRODUCTS_START,
   payLoad:filter
})

export const setProductsStart=(products)=>({
   type:productsTypes.SET_PRODUCTS_START,
   payLoad:products
})

export const deleteProductStart=(documentID)=>({
   type:productsTypes.DELETE_PRODUCT_START,
   payLoad:documentID,
})

export const fetchProductStart=(productID)=>({
   type:productsTypes.FETCH_PRODUCT_START,
   payLoad:productID
})


export const  setProduct=(product)=>({
   type:productsTypes.SET_PRODUCT,
   payLoad:product
})
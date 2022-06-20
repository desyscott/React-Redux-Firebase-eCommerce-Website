import UserReducer from "./Reducer/userReducer/userReducer"
import productsReducer from "./Reducer/productsReducer/productsReducer"
import addToCartReducer from "./Reducer/cartsReducer/cartReducer"

import {combineReducers} from "redux"

const rootReducer = combineReducers({
    User:UserReducer,
    ProductsData:productsReducer,
    cartData:addToCartReducer
})
export default rootReducer;
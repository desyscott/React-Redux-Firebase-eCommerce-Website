import UserReducer from "./Reducer/userReducer/userReducer"
import productsReducer from "./Reducer/productsReducer/productsReducer"
import addToCartReducer from "./Reducer/cartsReducer/cartReducer"

import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

import {combineReducers} from "redux"

export const rootReducer = combineReducers({
    User:UserReducer,
    ProductsData:productsReducer,
    cartData:addToCartReducer
})

const configStorage={
    key:"root",
    storage,
    whitelist:["cartData"]
}
export default persistReducer(configStorage,rootReducer);
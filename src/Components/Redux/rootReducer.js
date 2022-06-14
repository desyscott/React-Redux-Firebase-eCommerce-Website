import UserReducer from "./Reducer/userReducer/userReducer"
import productsReducer from "./Reducer/productsReducer/productsReducer"

import {combineReducers} from "redux"

const rootReducer = combineReducers({
    User:UserReducer,
    ProductsData:productsReducer
})
export default rootReducer;
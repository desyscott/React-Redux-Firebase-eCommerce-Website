import UserReducer from "./Reducer/userReducer/userReducer"

import {combineReducers} from "redux"

const rootReducer= combineReducers({
    User:UserReducer
})
export default rootReducer
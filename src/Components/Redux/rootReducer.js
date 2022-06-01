import UserReducer from "./Reducer/userReducer/userReducer"

import {combineReducers} from "redux"

const rootReducer= combineReducers({
    usersState:UserReducer
})
export default rootReducer
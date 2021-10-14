import { combineReducers } from "redux"
import loginReducer from './loginReducer'
import signupReducer from "./signupReducer"
import userReducer from "./userReducer"
import getUserReducer from "./getUserReducer"
import userDelReducer from "./userDelReducer"

const rootReducer = combineReducers({
        loginReducer,
        signupReducer,
        userReducer,
        getUserReducer,
        userDelReducer
})

export default rootReducer
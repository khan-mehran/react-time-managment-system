import { combineReducers } from "redux"
import loginReducer from './loginReducer'
import signupReducer from "./signupReducer"
import userReducer from "./userReducer"
import getUserReducer from "./getUserReducer"

const rootReducer = combineReducers({
        loginReducer,
        signupReducer,
        userReducer,
        getUserReducer,
})

export default rootReducer
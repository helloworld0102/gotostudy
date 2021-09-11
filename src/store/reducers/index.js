import { combineReducers } from 'redux'
import snackBarReducer from './snackBarReducer'
import userReducer  from './userReducer'
export default combineReducers(
    {
        snackBarReducer,
        userReducer
    }
)
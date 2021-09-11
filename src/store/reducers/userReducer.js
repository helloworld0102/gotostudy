import {userActionType} from '../../utils/constants'

//记录用户的登录状态
const initState ={
    userId:"",
    userName:"",
    password:""
}



const userReducer =(state=initState,action)=>{
    switch(action.type){
        case userActionType.ACTION_LOGIN:
            return action.payload
        default:
            return state
    }
}

export default userReducer
import {snackBarActionType} from '../../utils/constants'
const initState = {
    open:false,   //开关状态
    message:""    //显示信息
}


const snackBarReducer =(state = initState,action)=>{
    switch(action.type){
        case snackBarActionType.ACTION_OPEN:
            return {...state,...action.payload}
        case snackBarActionType.ACTION_CLOSE:
            return initState
        default :
            return state
    }
   
}

export default snackBarReducer;




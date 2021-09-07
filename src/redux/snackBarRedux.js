import React,{createContext,useReducer} from 'react';

const initSnackBar = {open:false,message:""}
//控制snackbar的打开与关闭
export const SnackBarContext = createContext({})  //共享变量

const reducer =(state,action)=>{
    switch(action.type){//判断需要做的操作
        case "open":
            return {open:true,message:action.message}
        case "close":
            return initSnackBar
        default:
            return state
    }
}

export const SnackShare = props=>{//使用共享变量的组件
    const[snackbarval,dispatch] = useReducer(reducer,initSnackBar)

    return(
        <SnackBarContext.Provider value ={{snackbarval,dispatch}}>
            {props.children}
        </SnackBarContext.Provider>
    )
    
}





import React,{createContent,useReducer} from 'react';

//控制snackbar的打开与关闭
export const snackBarContent = createContent({});  //共享变量

const reducer =(state,action)=>{
    switch(action.type){//判断需要做的操作
        case "open":
            return {open:true,message:action.message}
        default:
            return state
    }
}
export const snackbar = props=>{//使用共享变量的组件
    const[snackbarval,dispatch] = useReducer(reducer,{open:false,message:""})
    return(
        <snackBarContent.Provider value = {snackbarval}>
            {props.children}
        </snackBarContent.Provider>
    )
    
}





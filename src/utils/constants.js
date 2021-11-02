//URL
//请求路径的前缀，也就是请求ip+端口号
//公司笔记本
// const requestUrlPrefix = "http://10.6.8.181:8080";


//台式电脑
const requestUrlPrefix = "http://192.168.1.102:8080";

//拼接url的公共方法,只需要暴露这个方法即可
const getrequesturl=(requestPath)=>{
    return requestUrlPrefix+requestPath;
}
//定义reducer的actionType，防止名字写错的问题，相当于枚举类,需要在页面和reducer中引入
//userReducer
const userActionType ={
    ACTION_LOGIN : "login"
}

//snackBarReducer
const snackBarActionType = {
     ACTION_OPEN : "open",
     ACTION_CLOSE:  "close"
}


export{
    getrequesturl,  //只返回方法，而不暴露ip的前缀
    userActionType,
    snackBarActionType
}


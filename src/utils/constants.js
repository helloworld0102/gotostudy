
//请求路径的前缀，也就是请求ip+端口号
const requestUrlPrefix = "http://192.168.1.101:8080";

const getrequesturl=(requestPath)=>{
    return requestUrlPrefix+requestPath;
}

export{
    requestUrlPrefix,
    getrequesturl
}
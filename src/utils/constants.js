const requestUrlPrefix = "http://192.168.1.101:8080";

const getrequesturl=(requestPath)=>{
    return requestUrlPrefix+requestPath;
}

export{
    requestUrlPrefix,
    getrequesturl
}
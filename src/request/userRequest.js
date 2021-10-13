import axios from 'axios'
import {getrequesturl} from '../utils/constants'

const loginRequest =({userName,password})=>{
    return axios({
        url:getrequesturl("/User/login"),
        data:{
            userName,
            password
        },
        method:"post"
    })
}

const  validataSend = (email)=>{
    return axios({
        url:getrequesturl("/User/validataSend")+"/"+email,
        method:"get"
    })
}

const validateCodeCheck =({email,validateCode})=>{
    return axios({
        url:getrequesturl("/User/validateCodeCheck"),
        data:{
            email,
            validateCode
        },
        method:"post"
    })
}

export {
    loginRequest,
    validataSend,
    validateCodeCheck
} 
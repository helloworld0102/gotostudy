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

export {loginRequest} 
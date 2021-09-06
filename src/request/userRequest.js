import axios from 'axios'

const loginRequest =({userName,password})=>{
    return axios({
        url:"http://169.254.183.91:8080/User/login",
        data:{
            userName,
            password
        },
        method:"post"
    })
}

export {loginRequest} 
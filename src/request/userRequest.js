import axios from 'axios'

const loginRequest =({userName,password})=>{
    return axios({
        url:"localhost:8080/User/login",
        data:{
            userName,
            password
        },
        method:"post"
    })
}

export {loginRequest} 
import React, {useState, useEffect } from 'react'
import Img from "../static/img/loginbackground.jpeg"
const  Login =()=>{
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    return(
        <div >
        <img src = {Img}/>
         </div>
    )
}
export default Login
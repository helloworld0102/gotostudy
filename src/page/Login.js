import React, { useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import {navigate,useInterceptor} from 'hookrouter'
import {loginRequest} from '../request/userRequest'
import userPic from '../static/img/username.png'
import passwordPic from '../static/img/password.png'
import logo from '../static/img/logo.png'


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  formroot: {
    direction: "column",
    alignContent: "center",
    justifyContent: "center"
  },
  loginBox:{
    width: "40%",
    height: "80%", 
    border: "1px solid rgba(255, 215, 0)", 
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around", 
    alignItems: "center" ,
    minWidth:"400px"
  },
  inutBox:{
    height: "50px", 
    width: "80%", 
    border: "1px solid rgba(255, 215, 0)", 
    borderRadius: "20px",
    paddingLeft: "20px", 
    lineHeight: "50px" 
  },
  input:{
    color: "yellow",
    outline: "none", 
    border: "none", 
    backgroundColor: "transparent", 
    marginLeft: "20px" 
  },
  errmsg:{
    alignSelf: "flex-end", 
    marginRight: "40px", 
    marginTop: "-30px", 
    visibility: "hidden", 
    color: "red" 
  },
  loginButton:{
    width: "85%", 
    height: "50px", 
    backgroundColor: "yellow", 
    borderRadius: "20px", 
    border: 0, 
    color: "#5493f0" 
  },
  aBox:{
    display:"flex",
    width: "80%", 
    flexDirection:"row",
    justifyContent:"space-between"  
  },
  link:{
    textDecoration:"none",
    color:"black"
  }
}));

const interceptFunction = (currentPath, nextPath) => {
  return nextPath;
}
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const stopInterceptor = useInterceptor(interceptFunction);
  
  const changeUserName =(e)=>{
    setUserName(e.target.value)
  }
  const changePassword =(e)=>{
    setPassword(e.target.value)
  }
  const login= ()=>{
    const loginMess ={
      userName,
      password
    }
    loginRequest(loginMess).then((res)=>{
      stopInterceptor();
      if(res.flag === 0){
        //err
        
      }
      navigate('/Main');
    }).catch((err)=>{
      console.error(err)
    })
    
  }

  return (
    <Grid container direction='row' className={classes.root}>
      <Grid item xs={1}>
      </Grid>
      <Grid item xs={1}>
      </Grid>
      <Grid container xs={8} className={classes.formroot}>
        <div className={classes.loginBox}>
          <img src={logo} alt="logo" />
          <div className={classes.inutBox}>
            <img src={userPic} alt="用户名称" />
            <input type="text" className={classes.input} placeholder="用户名" value={userName} onChange ={(e)=>changeUserName(e)}/>
          </div>
          <p className={classes.errmsg}>用户不存在</p>
          <div className={classes.inutBox}>
            <img src={passwordPic} alt="密码" />
            <input type="password" className={classes.input} placeholder="密码" value={password} onChange ={(e)=>changePassword(e)}/>
          </div>
          <p className={classes.errmsg}>密码错误</p>
          <button value="登录" className={classes.loginButton} onClick ={()=>login()}>登录</button>
          {/* <A href="/Main">Users Page</A>  */}
          <div className ={classes.aBox}>
          <a className={classes.link} href="www.baidu.com">快速注册</a>
          <a className={classes.link} href="www.baidu.com">忘记密码</a>
          </div>
        </div>
      </Grid>
      <Grid item xs={2}>
      </Grid>

    </Grid>
  )
}
export default Login
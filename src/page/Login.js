import React, { useState,useRef} from 'react'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
// import {navigate} from 'hookrouter'
import {useHistory} from 'react-router-dom'
import {loginRequest} from '../request/userRequest'
import {userActionType,snackBarActionType} from '../utils/constants'
import Avatar from '@material-ui/core/Avatar';
import userPic from '../static/img/username.png'
import passwordPic from '../static/img/password.png'
import logo from '../static/img/logo.png'
import addFile from '../static/img/addFile.png'
import bg from "../static/img/loginbackground.jpeg"


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${bg})` 
  },
  formroot: {
    direction: "column",
    alignContent: "center",
    justifyContent: "center"
  },
  loginBox:{
    width: "40%",
    height: "70%", 
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
    marginLeft: "20px" ,
    autocomplete:"off"
  },
  errmsg:{
    alignSelf: "flex-end", 
    marginRight: "40px", 
    marginTop: "-30px", 
    color: "red" 
  },
  loginButton:{
    width: "85%", 
    height: "50px", 
    backgroundColor: "yellow", 
    borderRadius: "20px", 
    border: 0, 
    color: "#5493f0" ,
    '&:hover':{
      opacity:0.7
    }
  },
  aBox:{
    display:"flex",
    width: "80%", 
    flexDirection:"row",
    justifyContent:"space-between"  
  },
  link:{
    textDecoration:"none",
    color:"black",
    cursor:"pointer"
  }
}));

const Login = () => {
  const [userName, setUserName] = useState({value:"",err:"hidden"});
  const [password, setPassword] = useState({value:"",err:"hidden"});
  const [headPic,setHeadPic] = useState (addFile);
  const classes = useStyles();
  const dispatch = useDispatch();
  const fileRef = useRef();
  //负责页面跳转
  const history = useHistory();
  const changeUserName =(e)=>{
    setUserName({...userName,value:e.target.value})
  }
  const changePassword =(e)=>{
    setPassword({...password,value:e.target.value})
  }

  //在用户离开焦点之后，判断用户是否输入，从而显示错误信息
  const userNameIsNull=(e)=>{
      setUserName({...userName,err:e.target.value==="" ? true :"hidden"})
  }
  const passwordIsNull=(e)=>{
      setPassword({...password,err:e.target.value==="" ? true :"hidden"})
  }
  const changeHead = (e)=>{
    console.log("文件选择的内容是"+e.target.files[0]);
      // setHeadPic(getObjectURL(e.target.files[0]))
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=function(e){
        //读取成功后返回的一个参数e，整个的一个进度事件
            console.log(e);
        //选择所要显示图片的img，要赋值给img的src就是e中target下result里面
        //的base64编码格式的地址
        setHeadPic(e.target.result);
          }
  }
  const onClickToFile = ()=>{
    fileRef.current.click();
  }
  const login= ()=>{
    if(userName.value==="" || password.value === ""){
      return;
    }
    const loginMess ={
      userName:userName.value,
      password:password.value
    }
    loginRequest(loginMess).then((res)=>{
      if(res.data.flag === 0){
        dispatch({type:snackBarActionType.ACTION_OPEN,payload:{open:true,message:res.data.message}})
        dispatch({type:userActionType.ACTION_LOGIN,payload:res.data.data})
        return;
      }
      else{
      dispatch({type:snackBarActionType.ACTION_OPEN,payload:{open:true,message:res.data.message}})
      history.push('/Main');
      }}).catch((err)=>{
      console.error(err)
    })
  }

  const gotoRegister = () =>{
    history.push('./Register')
  }

  return (
    <Grid container direction='row' className={classes.root}>
      <Grid item xs={1}>
      </Grid>
      <Grid item xs={1}>
      </Grid>

      <Grid container xs ={8} className={classes.formroot} item={true}>
        <div className={classes.loginBox}>
          <img src={logo} alt="logo" />
          <div className={classes.inutBox}>
            <img src={userPic} alt="用户名称" />
            <input type="text" className={classes.input}  placeholder="用户名" value={userName.value} onChange ={(e)=>changeUserName(e)} onBlur ={(e)=>userNameIsNull(e)}/>
          </div>
          <p className={classes.errmsg} style={{visibility:userName.err}}>用户不存在</p>
          <div className={classes.inutBox}>
            <img src={passwordPic} alt="密码" />
            <input type="password" className={classes.input} placeholder="密码" value={password.value} onChange ={(e)=>changePassword(e)} onBlur ={(e)=>passwordIsNull(e)}/>
          </div>
          <p className={classes.errmsg} style={{visibility:password.err}} >密码错误</p>
          <button value="登录" className={classes.loginButton} onClick ={()=>login()}>登录</button>
          <div className ={classes.aBox}>
          <a className={classes.link} onClick ={() => gotoRegister()}>快速注册</a>
          <a className={classes.link} >忘记密码？（请找管理员）</a>
          </div>
        </div>
      </Grid>
      <Grid item xs={2}>
      <input type ="file" style={{display:"none"}} ref={fileRef} onChange ={(e)=>{changeHead(e)}}/>
      <Avatar  sizes= "100vw" src={headPic} onClick ={()=>{onClickToFile()}}/>
      </Grid>

    </Grid>
  )
}
export default Login
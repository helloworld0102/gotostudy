import React, { useState } from 'react'
import passwordPic from '../../static/img/password.png'
import passwordConfirmPic from '../../static/img/passwordConfirm.png'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

const useStyles = makeStyles(() => ({
    //输入框的属性
    input: {
      color: "yellow",
      outline: "none",
      // border: "none",
      borderTop:"none",
      borderLeft:"none",
      borderRight:"none",
      borderBottom:"1px solid #000",
      backgroundColor: "transparent",
      autocomplete: "off",
      cursor: "text",
      flex:5
    },
    //按钮基础属性
    btnBase: {
      backgroundColor: "yellow",
      border: 0,
      color: "#5493f0",
      fontSize: "15px",
      height: "50px",
      '&:hover': {
        opacity: 0.7
      },
      '&:active': {
        position: "relative",
        top: "1px"
      }
    },
    //下一步按钮独有属性
    nextBtnCss: {
      width: "100%",
      marginTop: "30px",
    },
    errMsg: {
      color: "red",
      textAlign: "left",
      marginTop: "10px",
      height: "30px"
    },
    baseInfoBox:{
      display:"flex",
      
      flexDirection:"column",
      height:"100%"
    },
    userNameBox:{
      flex:1,
      display:"flex"
    },
    avatarBox:{
      flex:3,
      display:"flex"
    },
    birthBox:{
      flex:1,
      display:"flex"
    },
    hobbyBox:{
      flex:4,
      display:"flex"
    },
    goalBox:{
      flex:1,
      display:"flex",
      alignItems:"center"
    }
  }));
const BaseInfo =({ setStep, registerInfo, setRegisterInfo }) =>{
  const classes = useStyles();
  const [password, setPassword] = useState("");  //密码
  const [value, setValue] = useState("")  //再次输入密码
  const [passwordErrMsg, setPasswordErrMsg] = useState({ message: "", show: false })  //控制密码输入框的错误信息和是否显示
  const [rePasswordErrMsg, setRePasswordErrMsg] = useState({ message: "", show: false })  //控制再次输入密码输入框的错误信息和是否显示

  
   //发送请求，判断输入的验证码是否正确，如果正确，跳转到密码页面，否则不跳转
   const gotoNext = () => {
    //切换到填写基本资料页面,并且将值返回给主页面
    setStep(2)
    setRegisterInfo({...registerInfo,password:password})
  }

return(
    <div className ={classes.baseInfoBox}>
    <div className = {classes.userNameBox}><div style ={{alignSelf:"center",flex:1,textAlign:"right",marginRight:"20px"}}>用户名</div>
        <input type="text"
          className={classes.input}
          />
   </div>
    <div className = {classes.avatarBox}><div style ={{alignSelf:"center",flex:1,textAlign:"right",marginRight:"20px"}}>头像</div>
    <div style ={{flex:5}}><Avatar sizes="100vw" src="http://localhost:8080/mystatic/abcd.jpg" /></div></div>
    <div className = {classes.birthBox}><div style ={{alignSelf:"center",flex:1,textAlign:"right",marginRight:"20px"}}>出生日期</div>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <Input type ="text"/>}
      />
    </LocalizationProvider>
    </div>
    <div className = {classes.hobbyBox}><div style ={{alignSelf:"center",flex:1,textAlign:"right",marginRight:"20px"}}>兴趣</div>
        <input type="text"
          className={classes.input}
          /></div>
    <div className = {classes.goalBox}><div style ={{alignSelf:"center",flex:1,textAlign:"right",marginRight:"20px"}}>目标</div>
        <input type="text"
          className={classes.input}
          /></div>
  </div>
)

}

export default BaseInfo
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Box from '@mui/material/Box';
const useStyles = makeStyles(() => ({
   //input外部容器公共属性
   inutBoxBase: {
    border: "1px solid rgba(255, 215, 0)",
    flex:5
  },
  input: {
    color: "yellow",
    outline: "none",
    border: "none",
    backgroundColor: "transparent",
    autocomplete: "off",
    cursor: "text",
    width: "100%",
    height:"100%"
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
      display:"flex",
      height:"100%"
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

  const showParams =(param) =>{
    console.log(param)
  }

return(
  <LocalizationProvider dateAdapter={AdapterDateFns} >
    <div className ={classes.baseInfoBox}>
    <div className = {classes.userNameBox}>
    <div style ={{alignSelf:"center",flex:1,textAlign:"right",marginRight:"20px",color: "yellow"}}>用户名</div>
    <div className={classes.inutBoxBase}>
        <input type="text"
          className={classes.input}
          />
    </div>
   </div>
    <div className = {classes.avatarBox}><div style ={{alignSelf:"center",flex:1,textAlign:"right",marginRight:"20px",color: "yellow"}}>头像</div>
    <div style ={{flex:5,display:"flex",alignItems:"center"}}><Avatar height="80px" widht= "80px" src="http://localhost:8080/mystatic/abcd.jpg" /></div></div>
    <div className = {classes.birthBox}><div style ={{alignSelf:"center",flex:1,textAlign:"right",marginRight:"20px",color: "yellow"}}>出生日期</div>
   
  <DatePicker
    label="Custom input"
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}

    renderInput={({ inputRef, inputProps, InputProps }) => (
      <div  className={classes.inutBoxBase}>
        <input className={classes.input} ref={inputRef} {...inputProps} />
        {InputProps?.endAdornment}
      </div>
    )}
  />

    </div>
    <div className = {classes.hobbyBox}><div style ={{alignSelf:"center",flex:1,textAlign:"right",marginRight:"20px",color: "yellow"}}>兴趣</div>
    <div className={classes.inutBoxBase}>
        <input type="text"
          className={classes.input}
          />
    </div>
          </div>
    <div className = {classes.goalBox}><div style ={{alignSelf:"center",flex:1,textAlign:"right",marginRight:"20px",color: "yellow"}}>目标</div>
    <div className={classes.inutBoxBase}>
        <input type="text"
          className={classes.input}
          />
    </div>
          </div>
  </div>
  </LocalizationProvider>
)

}

export default BaseInfo
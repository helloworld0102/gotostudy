import React, { useState } from 'react'
import passwordPic from '../../static/img/password.png'
import passwordConfirmPic from '../../static/img/passwordConfirm.png'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  //input外部容器公共属性
  inutBoxBase: {
    height: "50px",
    border: "1px solid rgba(255, 215, 0)",
    display: "flex"
  },
  //输入容器属性
  inputCss: {
    width: "100%",
    marginTop: "30px"
  },
  //输入框的属性
  input: {
    color: "yellow",
    outline: "none",
    border: "none",
    backgroundColor: "transparent",
    marginLeft: "20px",
    autocomplete: "off",
    cursor: "text",
    flex: 1
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
  }
}));
const PasswordSet = ({ setStep, registerInfo, setRegisterInfo }) => {
  const classes = useStyles();
  const [password, setPassword] = useState("");  //密码
  const [rePassword, setRePassword] = useState("")  //再次输入密码
  const [passwordErrMsg, setPasswordErrMsg] = useState({ message: "", show: false })  //控制密码输入框的错误信息和是否显示
  const [rePasswordErrMsg, setRePasswordErrMsg] = useState({ message: "", show: false })  //控制再次输入密码输入框的错误信息和是否显示

  const validatePassword = () =>{
    if(password === ""){
      setPasswordErrMsg({message:"密码不能为空",show:true})
      return false
    }
    setPasswordErrMsg({message:"",show:false})
    return true
  }

  const validateRePassword = () =>{
    if(rePassword === ""){
      setRePasswordErrMsg({message:"密码不能为空",show:true})
      return false
    }
    if(password !== "" && password !==rePassword){
      setRePasswordErrMsg({message:"两次输入的密码不一致",show:true})
      return false
    }
    setRePasswordErrMsg({message:"",show:false})
    return true
  }

   //发送请求，判断输入的验证码是否正确，如果正确，跳转到密码页面，否则不跳转
   const gotoNext = () => {
    if(!validatePassword() || !validatePassword()){
      return
    }
    //切换到填写基本资料页面,并且将值返回给主页面
    setStep(2)
    setRegisterInfo({...registerInfo,password:password})
  }

  return (
    <>
      <div className={`${classes.inutBoxBase} ${classes.inputCss}`}>
        <img src={passwordPic} alt="密码" style={{ alignSelf: "center", marginLeft: "10px" }} />
        <input type="password"
          className={classes.input}
          placeholder="请输入密码"
          value={password}
          onChange={(e) => { setPassword(e.target.value) }}
          onBlur={() => validatePassword()}
          />
      </div>
      <div className={classes.errMsg} style={{ visibility: passwordErrMsg.show }}>{passwordErrMsg.message}</div>
      <div className={`${classes.inutBoxBase} ${classes.inputCss}`}>
        <img src={passwordConfirmPic} alt="确认密码" style={{ alignSelf: "center", marginLeft: "10px" }} />
        <input type="password"
          className={classes.input}
          placeholder="请再次输入密码"
          value={rePassword}
          onChange={(e) => { setRePassword(e.target.value) }} 
          onBlur = {()=>validateRePassword()}/>
      </div>
      <div className={classes.errMsg} style={{ visibility: rePasswordErrMsg.show }}>{rePasswordErrMsg.message}</div>
      <button className={`${classes.btnBase} ${classes.nextBtnCss}`}
        onClick ={() => gotoNext()} >下一步</button>
    </>
  )

}

export default PasswordSet
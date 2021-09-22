import  React,{ useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import mailPic from '../../static/img/mail.png'
import validateCodePic from '../../static/img/validateCode.png'
import {navigate} from 'hookrouter'
import {validataSend,validataCodeCheck} from '../../request/userRequest'
import { useDispatch } from 'react-redux'
import {snackBarActionType} from '../../utils/constants'

const useStyles = makeStyles((theme) => ({
  //input外部容器公共属性
  inutBoxBase:{
    height: "50px", 
    border: "1px solid rgba(255, 215, 0)", 
    lineHeight: "50px",
    display:"flex"
  },
  //邮箱输入容器独有属性
  mailInputCss:{
    width: "100%", 
    marginTop:"30px"
  },
   //验证框输入容器独有属性
  validataInputCss:{
    marginRight:"20px",
    flex:1
  },
  //输入框的属性
  input:{
      color: "yellow",
      outline: "none", 
      border: "none", 
      backgroundColor: "transparent", 
      marginLeft: "20px" ,
      autocomplete:"off",
      cursor:"text",
      width:"100%",
      flex:1
  },
  //验证的那一行控件的外部容器
  validateLine:{
      display:"flex",
      height:"50px",
      marginTop:"30px"
  },
  //按钮基础属性
  btnBase:{
    backgroundColor: "yellow", 
    border: 0, 
    color: "#5493f0",
    fontSize:"15px",
    height:"50px",
    '&:hover':{
      opacity:0.7
    }
  },
  //发送验证码按钮独有属性
  validateBtnCss:{
    width:"100px"
  },
  //下一步按钮独有属性
  nextBtnCss:{
    width:"100%",
    marginTop:"30px",
  },
  errMsg:{
    color:"red",
    textAlign:"left",
    marginTop:"10px",
    height:"30px"
  }
  }));

const MailRegister = ()=>{
    const classes = useStyles()
    const [mailBox,setMailBox] = useState("");  //控制邮箱的内容
    const [validataCode,setValidateCode] = useState("")  //控制验证码的内容
    const [mailErrMsg,setMailErrMsg] = useState({message:"",show:false})  //控制邮箱输入框的错误信息和是否显示
    const [validateErrMsg,setValidateErrMsg] = useState({message:"",show:false})  //控制邮箱输入框的错误信息和是否显示
    const dispatch = useDispatch();
    

    //验证邮件输入是否正确
    const validateMail = () =>{
      const mailRegex = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;  //抄写的掘金上的。https://juejin.cn/post/6844903795386744845
      //判断输入是否为空
      if(mailBox === ""){
        setMailErrMsg({message:"输入邮箱不能为空",show:true})
        return
      }
      //判断输入的邮箱是否规范
      if(!mailRegex.test(mailBox)){
        setMailErrMsg({message:"请输入正确的邮箱",show:true})
        return
      }
      setMailErrMsg({message:"",show:false})
    }
    
    //发送邮件
    const sendValidate = ()=>{
      //如果邮箱为空或者格式不规范，则不做任何操作
      if(mailErrMsg.show==true){
        return;
      }
      validataSend(mailBox).then((res)=>{
          // dispatch({type:snackBarActionType.ACTION_OPEN,payload:{open:true,message:res.data.message}})
      })
    }

    const validateValidateCode = () =>{
      if(validataCode === ""){
        setValidateErrMsg({message:"验证码不能为空",show:true});
        return;
      }
      setValidateErrMsg({message:"",show:false})
    }
    //发送请求，判断输入的验证码是否正确，如果正确，跳转到密码页面，否则不跳转
    const gotoNext =()=>{
      validataCodeCheck({mailBox,validataCode}).then((res)=>{
        if(Response.data.flag===0){
          //验证码错误或者是验证码过期
          dispatch({type:snackBarActionType.ACTION_OPEN,payload:{open:true,message:res.data.message}})
          return;
        }
        //将数据放到主页面
        navigate('/Register/PasswordSet');
    })
      
    }
    
    return(
        <>
            <div className={`${classes.inutBoxBase} ${classes.mailInputCss}`}>
            <img src={mailPic} alt="邮箱" />
            <input type="text" 
            id = "mailbox"
            className={classes.input} 
            value={mailBox} 
            onChange= {(e)=>{setMailBox(e.target.value)}}
            onBlur = {()=>validateMail()}
            placeholder="请输入您的邮箱"  />
            </div>
            <div className={classes.errMsg} style={{visibility:mailErrMsg.show}}>{mailErrMsg.message}</div>
            <div className ={classes.validateLine}>
            <div className={`${classes.inutBoxBase} ${classes.validataInputCss}`}>
            <img src={validateCodePic} alt="验证码" />
            <input type="text" className={classes.input} 
            value={validataCode} 
            onChange= {(e)=>{setValidateCode(e.target.value)}} 
            onBlur = {()=>validateValidateCode()}
            placeholder="请输入验证码" />
            </div>
            <button className ={`${classes.btnBase} ${classes.validateBtnCss}`}
            onClick={()=>sendValidate()}>发送验证码</button>
            </div>
            <div  className={classes.errMsg} style={{visibility:validateErrMsg.show}}>{validateErrMsg.message}</div>
            <button className={`${classes.btnBase} ${classes.nextBtnCss}`} onClick={()=>gotoNext()}>下一步</button>
        </>
    )
}

export default MailRegister
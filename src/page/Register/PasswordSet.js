import passwordPic from '../../static/img/password.png'
import passwordConfirmPic from '../../static/img/passwordConfirm.png'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    //input外部容器公共属性
    inutBoxBase:{
      height: "50px", 
      border: "1px solid rgba(255, 215, 0)", 
      display:"flex"
    },
    //输入容器属性
    inputCss:{
      width: "100%", 
      marginTop:"30px"
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
        flex:1
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
      },
      '&:active':{
        position:"relative",
        top:"1px"
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
const PasswordSet =(setStep) =>{
    const classes = useStyles();

    return(
        <>
            <div className={`${classes.inutBoxBase} ${classes.inputCss}`}>
            <img src={passwordPic} alt="密码" style={{alignSelf:"center",marginLeft:"10px"}}/>
            <input type="text" 
            className={classes.input} 
            placeholder="请输入密码"  />
            </div>
            {/* <div className={classes.errMsg} style={{visibility:mailErrMsg.show}}>{mailErrMsg.message}</div> */}
            <div className={`${classes.inutBoxBase} ${classes.inputCss}`}>
            <img src={passwordConfirmPic} alt="确认密码" style={{alignSelf:"center",marginLeft:"10px"}}/>
            <input type="text" className={classes.input} 
            placeholder="请再次输入密码" />
            </div>
            {/* <div  className={classes.errMsg} style={{visibility:validateErrMsg.show}}>{validateErrMsg.message}</div> */}
            <button className={`${classes.btnBase} ${classes.nextBtnCss}`} >下一步</button>
        </>
    )

}

export default PasswordSet
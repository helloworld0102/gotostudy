import React,{useState} from 'react'
import {useRoutes} from 'hookrouter'
import Step from '@material-ui/core/Step'
import Stepper from '@material-ui/core/Stepper'
import StepLabel from '@material-ui/core/StepLabel'
import { makeStyles } from '@material-ui/core/styles'
import bg from "../../static/img/loginbackground.jpeg"
import MailRegister from './MailRegister'
import PasswordSet from './PasswordSet'
import BaseInfo from './BaseInfo'
import NotFind from '../NotFind'

const useStyles = makeStyles((theme) => ({
    /*注册页面的最外层*/
    RegisterDiv: {
      height: '100%',
      display:"flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${bg})` 
    },
    /*让里面的内容处在中间位置且控制大小，不至于出现内容少但是占的地方大的情况，很难看*/
    ContentDiv:{
    width: "30%",
    height: "70%", 
     display:"flex",
     flexDirection:"column",
    //  border:"1px solid yellow",
    //  borderRadius:"10px"
    },
    root:{
        backgroundColor: "transparent", 
    },
    RegisterContent:{
    display:"flex",
    flexDirection:"column",
    flex:1
    }
}))

const routes = {
    '/' :()=><MailRegister/>,                   //hookrouter中/代表的是当前目录,可以认为这就是默认进去的子路由
    'PasswordSet' :()=> <PasswordSet/>,         //这里不要写/，把这个理解成cmd中的cd，只是理解的方式，但真正的可能不是这样，因为这个是试出来的
    'BaseInfo' :()=> <BaseInfo/>
}


const Register = () => {
    const routeResults = useRoutes(routes);
    //初始化在第一步
    const [activeStep,setActiveStep] = useState(0)
    const classes = useStyles();
    //步骤数组
    const steps = ["验证邮箱","设置密码","填写基本资料","注册成功"]

    return (
        <div className ={classes.RegisterDiv}>
            <div className ={classes.ContentDiv}>
            <Stepper activeStep={activeStep} alternativeLabel className ={classes.root}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className ={classes.RegisterContent}>
                    {routeResults || <NotFind/>}
            </div>
            </div>
        </div>
    )



}

export default Register
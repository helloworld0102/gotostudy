import React,{useState,useEffect} from 'react'
import {BrowserRouter as Router,Switch,Route,useRouteMatch} from 'react-router-dom'
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
    width: "25%",
    height:"500px"
    },
    root:{
        backgroundColor: "transparent", 
    }
}))


const registerRoutes =[
    {path:'/',component:<MailRegister/>, exact:true},
    {path:'/PasswordSet',component:<PasswordSet/>,exact:true},
    {path:'/BaseInfo',component:<BaseInfo/>,exact:false},
    {path:'*',component:<NotFind/>,exact:false}
    ]

const Register = () => {


    const classes = useStyles();
    //步骤数组
    const steps = ["验证邮箱","设置密码","填写基本资料","注册成功"]
    
    //初始化在第一步
    const [activeStep,setActiveStep] = useState(0)
    //当前路径
    const { url } = useRouteMatch();
    //通过路由变化来判断是否需要修改当前步骤

    useEffect(()=>{
        console.log("路径修改，重新渲染，当前页面的下标为"+registerRoutes.findIndex(router=>router.path ===url))
        setActiveStep(registerRoutes.findIndex(router=>("/Register".concat(router.path)) ===url))
    },[url])
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
            <Router basename = '/Register'>
        <Switch>
       {registerRoutes.map((item)=>(
        <Route path={item.path} children= {item.component} exact ={item.exact}>
        </Route>
        )
       )}
       </Switch>
       </Router>
            </div>
        </div>
    )



}

export default Register
import React,{useState} from 'react'
import Step from '@material-ui/core/Step'
import Stepper from '@material-ui/core/Stepper'
import StepLabel from '@material-ui/core/StepLabel'
import { makeStyles } from '@material-ui/core/styles'
import bg from "../../static/img/loginbackground.jpeg"

const useStyles = makeStyles((theme) => ({
    RegisterDiv: {
      height: '100%',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${bg})` 
    },
    root:{
        backgroundColor: "transparent", 
    }
}))


const Register = () => {

    //初始化在第一步
    const  [activeStep,setActiveStep] = useState(0)
    const classes = useStyles();
    //步骤数组
    const steps = ["验证邮箱","设置密码","填写基本资料","注册成功"]

    //根据当前的步骤返回不同的页面
    const getContent = (activeStep)=>{
        switch(activeStep){
            case 0 :
                return
        }
    }
    return (
        <div className ={classes.RegisterDiv}>
            <div>
            <Stepper activeStep={activeStep} alternativeLabel className ={classes.root}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div className ={classes.RegisterContent}>
                registerContent
            </div>
            </div>
        </div>
    )



}

export default Register
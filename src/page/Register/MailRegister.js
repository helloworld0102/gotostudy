import { makeStyles } from '@material-ui/core/styles'
import userPic from '../../static/img/username.png'
import {navigate,useInterceptor} from 'hookrouter'

const useStyles = makeStyles((theme) => ({
  inutBox:{
    flex:1,
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
    }
  }));

const gotoNext =()=>{
  navigate('/Register/PasswordSet');
}
const MailRegister = ()=>{
    const classes = useStyles()
    return(
        <>
            <div className={classes.inutBox}>
            <img src={userPic} alt="用户名称" />
            <input type="text" className={classes.input}  placeholder="用户名" value={10} />
            </div>
            <div className={classes.inutBox}>
            <img src={userPic} alt="用户名称" />
            <input type="text" className={classes.input}  placeholder="用户名" value={10} />
            </div>
        </>
    )
}

export default MailRegister
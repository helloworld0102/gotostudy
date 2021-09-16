import { makeStyles } from '@material-ui/core/styles'
import userPic from '../../static/img/username.png'

const useStyles = makeStyles((theme) => ({
   
    input:{
      color: "yellow",
      outline: "none", 
      border: "none", 
      backgroundColor: "transparent", 
      marginLeft: "20px" ,
      autocomplete:"off"
    }
  }));

const MailRegister = ()=>{
    const classes = useStyles()
    return(
        <>
            <div className={classes.inutBox}>
            <img src={userPic} alt="用户名称" />
            <input type="text" className={classes.input}  placeholder="用户名" value={10} />
            </div>
        </>
    )
}

export default MailRegister
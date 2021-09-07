import React,{useContext} from 'react'
import {Snackbar} from '@material-ui/core'
import { SnackBarContext } from '../redux/snackBarRedux'

const MySnackBar =()=>{
    const {dispatch}= useContext(SnackBarContext)
    const {snackbarval} = useContext(SnackBarContext)
    console.log("snackbar"+snackbarval)
    console.log("dispatch"+dispatch)
   return(
    <Snackbar autoHideDuration="500" 
       message={snackbarval.message} 
       open= {snackbarval.open}
       onClose ={dispatch({type:"close",message:""})}>
           
       </Snackbar>
    )
}

export default MySnackBar
import React,{useContext} from 'react'
import {useRoutes} from 'hookrouter';
import routes from './route/routes'
import {SnackShare, SnackBarContext} from './redux/snackBarRedux'
import {Snackbar} from '@material-ui/core'
import './App.css';
import MySnackBar from './components/childSnackbar';


function App() {
  const routeResults = useRoutes(routes)
  const {dispatch}= useContext(SnackBarContext)
  const {snackbarval} = useContext(SnackBarContext)
  return (
    //通过使用flag来获取到当前状态值，从而修改我们组件的状态
    <SnackShare>
    <div id ='App'>
       {routeResults}
       <Snackbar autoHideDuration="500" 
       message={snackbarval.message} 
       open= {snackbarval.open}
       onClose ={dispatch({type:"close",message:""})}>
       </Snackbar>
    </div>
    </SnackShare>
  );
}

export default App;

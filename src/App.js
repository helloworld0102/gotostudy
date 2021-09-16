import React from 'react'
import { useSelector,useDispatch} from 'react-redux'
import {snackBarActionType} from './utils/constants'
import {useRoutes} from 'hookrouter'
import routes from './route/routes'
import {Snackbar} from '@material-ui/core'
import NotFind from './page/NotFind'
import './App.css'


function App() {
  const routeResults = useRoutes(routes)
  const dispatch = useDispatch();
  const snackflag = useSelector(state=>state.snackBarReducer)
 
  return (
    <div id ='App'>
       {routeResults || <NotFind/>}
       <Snackbar 
       autoHideDuration = {1000}
       message={snackflag.message} 
       open= {snackflag.open}
       onClose = {()=>dispatch({type:snackBarActionType.ACTION_CLOSE,payload:{}})}
       >
       </Snackbar>
    </div>
  );
}

export default App;

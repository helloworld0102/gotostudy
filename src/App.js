import React,{useContent} from 'react'
import {useRoutes} from 'hookrouter';
import routes from './route/routes'
import {snackbar, snackBarContent} from './redux/snackBarRedux'
import {Snackbar} from '@material-ui/core'
import './App.css';


function App() {
  const routeResults = useRoutes(routes);
  const {snackbarFlag} = useContent(snackBarContent)
  return (
    //通过使用flag来获取到当前状态值，从而修改我们组件的状态
    <snackbar>
    <div id ='App'>
       {routeResults}
       <Snackbar autoHideDuration="500" message={snackbarFlag.message} open= {snackbarFlag.open}></Snackbar>
    </div>
    </snackbar>
  );
}

export default App;

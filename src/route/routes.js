//所有页面的路由
import Login from '../page/Login';
import Main from '../page/Main';


const  routes = {
    '/': () => <Login />,
    '/Main': () => <Main />,
  };

export default  routes
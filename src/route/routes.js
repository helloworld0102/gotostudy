//所有页面的路由
import Login from '../page/Login';
import Main from '../page/Main';
import Register from '../page/Register/Register'

const  routes = {
    '/': () => <Login />,
    '/Main': () => <Main />,
    '/Register':() => <Register />
  };

export default  routes
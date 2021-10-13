//所有页面的路由
import Login from '../page/Login';
import Main from '../page/Main';
import Register from '../page/Register/Register'
import NotFind from '../page/NotFind';

const routes =[
{path:'/',component:<Login/>, exact:true},
{path:'/Main',component:<Main/>,exact:false},
{path:'/Register',component:<Register/>,exact:false},
{path:'*',component:<NotFind/>,exact:false}
]

export default  routes
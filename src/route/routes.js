//所有页面的路由
import Login from '../page/Login';
import Main from '../page/Main';
import Register from '../page/Register/Register'
import NotFind from '../page/NotFind';

//hookrouter用法，暂时不用。
// const  routes = {
//     '/': () => <Login />,
//     '/Main': () => <Main />,
//      //在hookrouter中好像是无法设置exact，这是我想的一个办法，就是让这个路由下的所有路径都进入这个目录（用*匹配这个路径下的子路由），没想到成功了，说明他是能识别通配符的
//      //但是进入这个目录要加一个/。如果这个路由下没有子路由，则可以省略
//     '/Register*':() => <Register />   
//   };


const routes =[
{path:'/',component:<Login/>, exact:true},
{path:'/Main',component:<Main/>,exact:false},
{path:'/Register',component:<Register/>,exact:false},
{path:'*',component:<NotFind/>,exact:false}
]

export default  routes
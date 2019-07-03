

import loadable from './../utils/loadable'
// import Error404 from './../pages/Error404'
// import Error401 from './../pages/Error401'
// import Login from './../pages/Login'
// import Header from './../common/Header'

const Header = loadable(() => import('./../common/Header'))
const Error404 = loadable(() => import('./../pages/Error404'))
const Error401 = loadable(() => import('./../pages/Error401'))
const Login = loadable(() => import('./../pages/Login'))

export const routerConfig = [
    {
        path:'/',
        component:Header,
        auth:true
    },{
        path:'/home',
        component:Header,
        auth:true
    },{
        path:'/login',
        component:Login
    },{
        path:'/401',
        component:Error401
    },{
        path:'/404',
        component:Error404
    }
]

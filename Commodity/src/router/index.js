import Vue from "vue";
import Router from "vue-router";
// import Home from "../components/Home.vue"

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            //重定向
            redirect:'/login',
            component: () => import('@/components/Login')
        },
        {
            //首次进入 进入登录
            path:'/login',
            name:'login',
            component: () => import('@/components/Login')
        },
        {
            path:'/home',
            //component: Home 
            //component: () => import('@/components/Home') //路由懒加载
            component: resolve => require(['@/components/Home'], resolve) //异步组件的加载
        }
    ],
    mode:'history'
})
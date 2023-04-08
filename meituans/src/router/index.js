import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            //重定向
            path:'/',
            //路由懒加载
            component:()=>import('../view/home/Home.vue')
        },
        {
            path:'/home',
            //路由懒加载
            component:()=>import('../view/home/Home.vue')
        },
        {
            path:'/cart',
            //路由懒加载
            component:()=>import('../view/cart/Cart.vue')
        },
        {
            path:'/mine',
            //路由懒加载
            component:()=>import('../view/mine/Mine.vue')
        },
        {
            path:'/order',
            //路由懒加载
            component:()=>import('../view/order/Order.vue')
        },
        {
            path:'/store',
            //路由懒加载
            component:()=>import('../view/store/Store.vue')
        },
        {
            path:'/createorder',
            //路由懒加载
            component:()=>import('../view/createOrder/CreateOrder.vue')
        },
    ]
})

export default router
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
            //首页
            path:'/home',
            //路由懒加载
            component:()=>import('../view/home/Home.vue')
        },
        {
            //购物车
            path:'/cart',
            //路由懒加载
            component:()=>import('../view/cart/Cart.vue')
        },
        {
            //我的页面
            path:'/mine',
            //路由懒加载
            component:()=>import('../view/mine/Mine.vue')
        },
        {
            //订单页
            path:'/order',
            //路由懒加载
            component:()=>import('../view/order/Order.vue')
        },
        {
            //店铺
            path:'/store',
            //路由懒加载
            component:()=>import('../view/store/Store.vue')
        },
        {
            //生成订单
            path:'/createorder',
            //路由懒加载
            component:()=>import('../view/createOrder/CreateOrder.vue')
        },
        {
            //地址管理
            path:'/address',
            //路由懒加载
            component:()=>import('../view/address/Address.vue')
        },
    ]
})

export default router
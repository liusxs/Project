import { createRouter, createWebHashHistory } from 'vue-router'
import { showToast } from 'vant'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            //重定向
            path: '/',
            //路由懒加载
            component: () => import('../view/home/Home.vue')
        },
        {
            //首页
            path: '/home',
            //路由懒加载
            component: () => import('../view/home/Home.vue')
        },
        {
            //轮播图
            path: '/carousel',
            //路由懒加载
            component: () => import('../view/carousel/Carousel.vue')
        },
        {
            //购物车
            path: '/cart',
            //路由懒加载
            component: () => import('../view/cart/Cart.vue'),
            meta: {
                isAuth: true
            }
        },
        {
            //我的页面
            path: '/mine',
            //路由懒加载
            component: () => import('../view/mine/Mine.vue'),
            meta: {
                isAuth: true
            }
        },
        {
            //订单页
            path: '/order',
            //路由懒加载
            component: () => import('../view/order/Order.vue'),
            meta: {
                isAuth: true
            }
        },
        {
            //店铺
            path: '/store',
            //路由懒加载
            component: () => import('../view/store/Store.vue')
        },
        {
            //生成订单
            path: '/createorder',
            //路由懒加载
            component: () => import('../view/createOrder/CreateOrder.vue'),
            meta: {
                isAuth: true
            }
        },
        {
            //地址管理
            path: '/address',
            //路由懒加载
            component: () => import('../view/address/Address.vue'),
            meta: {
                isAuth: true
            }
        },
        {
            //地址编辑
            path: '/addressEdit',
            //路由懒加载
            component: () => import('../view/addressEdit/AddressEdit.vue'),
            meta: {
                isAuth: true
            }
        },
        {
            //账号管理页面
            path: '/userinfoedit',
            //路由懒加载
            component: () => import('../view/userinfoedit/Userinfoedit.vue'),
            meta: {
                isAuth: true
            }
        },
        {
            //登录
            path: '/login',
            //路由懒加载
            component: () => import('../view/login/Login.vue')
        },
        {
            //注册
            path: '/register',
            //路由懒加载
            component: () => import('../view/register/Register.vue')
        },
    ]
})

//路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        //登录以后，会在localstorage里面 存在一个标识
        if (localStorage.isLogin === 'login') {
            next()
        } else {
            next('/login')
            showToast('请登录')
        }
    } else {
        next()
    }
})
export default router
import Vue from 'vue'
import VueRouter from 'vue-router'

// 组件通过export暴露接口，路由中导入组件
import Head from '../components/Head.vue'
import Boutique from '../views/Boutique.vue'
import Recommend from '../views/Recommend.vue'

// 导入 vue-router 依赖
Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/head',   // 跳转路径
            name: 'head',    // 名称
            component: Head  // 组件
        },
        {
            path: '/boutique',
            name: 'boutique',
            component: Boutique
        },
        {
            path: '/recommend',
            name: 'recommend',
            component: Recommend
        }
    ]
});

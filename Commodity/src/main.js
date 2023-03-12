import Vue from 'vue'
import App from './App.vue'
//按需引入element-ui组件
// import '../plugins/element'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import router from './router'

//全局引入element-ui组件
import ELementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ELementUI);

//挂载到原型，可以在全局使用
Vue.prototype.axios = axios

//阻止显示生成模式的消息
Vue.config.productionTip = false

//统一Host路径，方便各组件进行调用
Vue.prototype.HOST = '/api';

new Vue({
  router,
  // h 是 Vue.js 里面的 createElement 函数，这个函数的作用就是生成一个 VNode节点，render 函数得到这个 VNode 节点之后，返回给 Vue.js 的 mount 函数，渲染成真实 DOM 节点，并挂载到根节点上
  render: h => h(App),
}).$mount('#app')

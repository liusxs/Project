import { createApp } from 'vue'
import App from './App.vue'
import './assets/reset.css'
//amfe-flexible配置可伸缩布局方案 = 自动适配移动端 
import 'amfe-flexible'
import router from './router'
// 1. 引入需要的组件
// import { Button } from 'vant';
// 2. 引入组件样式
// import 'vant/lib/index.css';

const app = createApp(App)
  app.use(router)
  app.mount('#app')
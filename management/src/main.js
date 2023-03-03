import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

//通过createApp创建了app对象
const app = createApp(App)
//app.use()函数，表示在整个工程引入某个模块(全局引入) 
app.use(ElementPlus)
app.mount('#app')
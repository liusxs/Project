import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
// import {Row, Button} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store';

// 全局引入
Vue.use(ElementUI)

// 按需引入
// Vue.use(Row)
// Vue.use(Button)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

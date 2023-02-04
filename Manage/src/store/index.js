import Vue from 'vue'
import Vuex from 'vuex'
import tab from '../store/tab'

// 全局引入
Vue.use(Vuex)

// 创建vuex实例
export default new Vuex.Store({
    modules:{
        tab
    }
})
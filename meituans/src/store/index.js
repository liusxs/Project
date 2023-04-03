import { createStore } from "vuex";

export default createStore({
    state: {
        //购物车的数据
        cartList: [],
    },  
    mutations: {
        addcart(state, value) {
            state.cartList = value
        }
    },
    actions: {}
})
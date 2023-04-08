import { createStore } from "vuex";

export default createStore({
    state: {
        //购物车的数据
        cartList: [],
        //确认header组件 点击编辑的时候 底部组件的展示
        isDelete: true,
        //默认展示编辑的状态
        edit: true,
        orderList: []
    },
    mutations: {
        addcart(state, value) {
            state.cartList = value
        },
        changDelete(state) {
            state.isDelete = !state.isDelete
        },
        delete(state, value) {
            state.cartList = value
        },
        edit(state, value) {
            if (value) {
                state.edit = true
            } else {
                state.edit = !state.edit
            }
        },
        pay(state, value) {
            state.orderList = value
        }
    },
    actions: {}
})
import { createStore } from "vuex";

export default createStore({
    state: {
        //购物车的数据
        cartList: [],
        //确认header组件 点击编辑的时候 底部组件的展示
        isDelete: true,
        //默认展示编辑的状态
        edit: true,
        orderList: [],
        userAddress: [
            {
                id: '2001',
                name: 'liuliu',
                tel: '16666645445',
                province: '银河系',
                city: '地球',
                conuty: '亚洲',
                addressDetail: '小城',
                isDefault: true ,
                areaCode:'110101'
            },
            {
                id: '2002',
                name: 'xiaoliu',
                tel: '16669998955',
                province: '太阳系',
                city: '地球',
                conuty: '东欧',
                addressDetail: '城中村',
                isDefault: false ,
                areaCode:'110101'
            },
        ],
        orderListEnd:[

        ],
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
        },
        orderListEd(state){
            state.orderListEnd = state.orderListEnd.concat(state.orderList)
        }
    },
    actions: {}
})
import { ADDCART } from './mutation-types'
export default {
    [ADDCART](state, value) {
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
    orderListEd(state) {
        state.orderListEnd = state.orderListEnd.concat(state.orderList)
    },
    addaddress(state, value) {
        state.userAddress.map(item => {
            if (value.isDefault) {
                item.isDefault = false
            }
        })
        state.userAddress.push(value)
    },
    editaddress(state, value) {
        state.userAddress = state.userAddress.map(item => {
            if (value.isDefault) {
                item.isDefault = false
            }
            // if (item.id === value.id) {
            //     return value
            // } else {
            //     return item
            // }
            return item.id === value.id ? value : item
        })
    },
    deleteaddress(state, value) {
        //过滤
        state.userAddress = state.userAddress.filter(item => {
            return !(item.id === value.id)
        })
        if (value.isDefault) {
            state.userAddress[0].isDefault = true
        }
    }
}
<template>
    <div class="createorder">
        <Header title="生成订单" />
        <van-contact-card type="edit" :tel="tel" :name="name" @click="onEdit" />
        <div class="content">
            <div v-for="(item, index) in store.state.orderList">
                <van-card :num="item.num" :price="item.price" :title="item.title" :thumb="item.pic" />
            </div>
        </div>
        <div class="pay_wrap">
            <div class="price">
                <span>商品金额</span>
                <span>￥{{ totalPrice }}</span>
            </div>
            <van-button type="primary" class="pay_btn" block color="#ffc400" @click="handleCreateOrder">生成订单</van-button>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { reactive, toRefs, onMounted } from 'vue'
import { useStore } from "vuex";
import { useRouter, useRoute } from 'vue-router'
import { showDialog } from 'vant';
export default {
    components: {
        Header,
    },
    setup() {
        const data = reactive({
            tel: '1666666666',
            name: 'liuliu',
            totalPrice: 0
        })
        const store = useStore()
        const router = useRouter()
        const route = useRoute()

        const onEdit = () => {

        }
        const initPrice = () => {
            let price = 0
            if (store.state.orderList.length) {
                store.state.orderList.forEach((item) => {
                    price += item.num * item.price
                });
            }
            data.totalPrice = price
        }
        //初始化用户的地址
        const initUser = () => {
            store.state.userAddress.forEach((item) => {
                if (item.isDefault) {
                    data.name = item.name;
                    data.tel = item.tel;
                }
            })
        }
        const handleCreateOrder = () => {
            showDialog({
                title: '提示',
                message: '生成订单成功',
            }).then(() => {
                //要和购物车练习起来
                let newList = store.state.cartList.filter((item) => {
                    return !route.query.list.includes(item.id + "");
                })
                store.commit('delete', newList)
                router.push('/order')
            });
        }
        onMounted(() => {
            initUser()
            initPrice()
        })
        return {
            ...toRefs(data),
            onEdit,
            store,
            handleCreateOrder,
        }
    }
}
</script>
<style lang="less" scoped>
.createorder {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;
    }

    .pay_wrap {
        padding: 10px 0;
        width: 100%;
        background: #fff;
        border-top: 1px solid #e9e9e9;

        >div {
            display: flex;
            justify-content: space-between;
            padding: 0 5%;
            margin: 10px 0;
            font-size: 14px;

            span:nth-child(2) {
                color: red;
                font-size: 18px;
            }
        }

        .pay_btn {
            width: 99%;
            margin: 0 auto;
        }
    }
}
</style>
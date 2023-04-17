<template>
    <div class="storeDetails">
        <Header title="店铺" />
        <div class="content">
            <div class="img"></div>
            <div class="foodSort">
                <div class="name">
                    {{ title }}
                    <img :src="img" alt="" class="store-img">
                </div>
                <van-tabs color="#ffc400">
                    <van-tab v-for="(item, index) in storeData" :title="item.name">
                        <FoodList :index="index" :foodData="item.data" />
                    </van-tab>
                </van-tabs>
            </div>
        </div>
        <van-action-bar>
            <van-action-bar-icon icon="chat-o" text="客服" />
            <van-action-bar-icon icon="cart-o" text="购物车" :badge="store.state.cartList.length" @click="goCart" />
            <van-action-bar-button type="warning" text="加入购物车" @click="handleAddCart" />
            <van-action-bar-button type="danger" text="立即购买" @click="goBuy" />
        </van-action-bar>
    </div>
</template>
<script>
import { reactive, toRefs, onMounted } from 'vue'
import Header from '../../components/Header.vue';
import FoodList from './components/FoodList.vue';
import { useStore } from "vuex";
import { useRouter } from 'vue-router';
import { showToast } from "vant";
import axios from 'axios';
export default {
    components: {
        Header,
        FoodList,
    },
    setup() {
        let store = useStore();
        let router = useRouter();
        //定义data
        let data = reactive({
            title: "精品服装",
            img: "https://github.com/liusxs/Project/blob/main/mobilecommerc-x/src/assets/img/d_sp_06.png?raw=true",
            storeData: [
            ],
        });
        const getStoreData = () => {
            axios.get('/home/getStoreData').then((res) => {
                console.log(res)
                const { code, storeData } = res.data;
                if (code == 200) {
                    data.storeData = storeData;
                }
            })
        }
        onMounted(() => {
            getStoreData()
        });
        const handleAddCart = (type) => {
            const newList = store.state.cartList || []
            data.storeData.forEach(item => {
                item.data.items?.forEach(item => {
                    item.children.forEach(item => {
                        if (item.num > 0) {
                            newList.push(item)
                        }
                    });
                });
            });
            if (newList.length === 0) {
                showToast("请选择商品");
                return;
            }
            store.commit('ADDCART', newList);
            type === 'buy' ? goCart() : "";
        };
        const goCart = () => {
            router.push('/cart')
        };
        const goBuy = () => {
            handleAddCart('buy')
        }
        return {
            handleAddCart,
            ...toRefs(data),
            store,
            goCart,
            goBuy,
        }
    },
};
</script>
<style lang="less" scoped>
.storeDetails {
    height: 100%;
    display: flex;
    flex-flow: column;

    .content {
        flex: 1;
        overflow-y: auto;

        .img {
            background: url("@/assets/img/背景.jpg") no-repeat center/cover;
            width: 100%;
            height: 150px;
        }

        .foodSort {
            height: 500px;
            background-color: #fff;
            margin-top: -30px;
            border-radius: 20px 20px 0 0;

            /*.sort{}*/
            .name {
                display: flex;
                padding: 20px;
                justify-content: space-between;

                .store-img {
                    width: 80px;
                    height: 80px;
                    border-radius: 10px;
                    margin-top: -30px;
                }
            }
        }
    }
}
</style>
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
            <van-action-bar-icon icon="cart-o" text="购物车" :badge="store.state.cartList.length" />
            <van-action-bar-button type="warning" text="加入购物车" @click="handleAddCart" />
            <van-action-bar-button type="danger" text="立即购买" />
        </van-action-bar>
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import Header from '../../components/Header.vue';
import FoodList from './components/FoodList.vue';
import { useStore } from "vuex";
export default {
    components: {
        Header,
        FoodList,
    },
    setup() {
        let store = useStore()
        //定义data
        let data = reactive({
            title: "晚霞",
            img: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F2062a5b3-a52f-4b38-aaa4-1f94eb74238d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682816689&t=b19f5ca6b297b0e5c8400037b4462db4",
            storeData: [
                {
                    name: "点菜",
                    data: {
                        content: "66",
                        items: [
                            {
                                text: "7894",
                                children: [
                                    {
                                        pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F2062a5b3-a52f-4b38-aaa4-1f94eb74238d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682816689&t=b19f5ca6b297b0e5c8400037b4462db4",
                                        title: "5564",
                                        num: 12,
                                        price: 25.0,
                                        id: 0,
                                        add: true,
                                    },
                                    {
                                        pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F2062a5b3-a52f-4b38-aaa4-1f94eb74238d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682816689&t=b19f5ca6b297b0e5c8400037b4462db4",
                                        title: "8161",
                                        num: 0,
                                        price: 22.0,
                                        id: 0,
                                        add: true,
                                    },
                                ],
                            },
                            {
                                text: "4444",
                                children: [
                                    {
                                        pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F2062a5b3-a52f-4b38-aaa4-1f94eb74238d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682816689&t=b19f5ca6b297b0e5c8400037b4462db4",
                                        title: "2326",
                                        num: 0,
                                        price: 12.0,
                                        id: 9,
                                        add: true,
                                    },
                                    {
                                        pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F2062a5b3-a52f-4b38-aaa4-1f94eb74238d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682816689&t=b19f5ca6b297b0e5c8400037b4462db4",
                                        title: "2326",
                                        num: 0,
                                        price: 12.0,
                                        id: 9,
                                        add: true,
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    name: "2222",
                    data: {
                        content: "6644",
                    },
                },
                {
                    name: "0000",
                    data: {
                        content: "6644",
                    },
                },
            ],
        });
        const handleAddCart = () => {
            const newList = []
            data.storeData.forEach(item => {
                item.data.items?.forEach(item => {
                    item.children.forEach(item => {
                        if (item.num > 0) {
                            newList.push(item)
                        }
                    });
                });
            });
            store.commit('addcart', newList)
        };
        return {
            handleAddCart,
            ...toRefs(data),
            store,
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
            background: url("../../assets/img/背景.jpg") no-repeat center/cover;
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
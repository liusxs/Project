<template>
    <div class="order">
        <Header title="订单" />
        <div class="content">
            <van-tabs color="#ffc400">
                <van-tab :title="item" v-for="(item, index) in navData">
                    <div v-for="(i, index) in store.state.orderListEnd" v-if="item === '全部' && store.state.orderListEnd.length">
                        <van-card :num="i.num" :price="i.price" :title="i.title" :thumb="i.pic" />
                    </div>
                    <div v-else>
                        <Empty />
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <Footer />
    </div>
</template>
    
<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Empty from '@/components/Empty.vue';
import { reactive, toRefs } from 'vue';
import { useStore } from 'vuex'
export default {
    components: {
        Footer,
        Header,
        Empty,
    },
    setup() {
        const store = useStore()
        const data = reactive({
            navData: ['全部', '交易完成', '待付款', '待发货', '已发货']
        })
        return {
            ...toRefs(data),
            store,
        }
    }
}
</script>
    
<style lang="less" scoped>
.order {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;
        /*
            设置当内容溢出块级元素的上下两侧时所显示的内容
            取决于浏览器本身。当内容发生溢出时，桌面浏览器如 Firefox 会显示滚动条
        */
    }
}
</style>    
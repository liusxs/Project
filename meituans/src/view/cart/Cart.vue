<template>
    <div class="cart">
        <Header title="购物车" :edit="true"/>
        <CartDetail v-if="isShow"/>
        <Empty v-else/>
        <Footer />
    </div>
</template>
    
<script>
import Footer from '@/components/Footer.vue';
import Empty from '@/components/Empty.vue';
import Header from '@/components/Header.vue';
import CartDetail from './components/CartDetail.vue';
import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'
export default {
    components: {
        Footer,
        Empty,
        Header,
        CartDetail,
    },
    setup() {
        const isShow = ref(true)
        const store = useStore()

        const init = () => {
            if (store.state.cartList.length === 0) {
                isShow.value = false;
            }
        };
        onMounted(() => {
            init();
        })
        return{
            isShow,
        }
    },
}
</script>
    
<style lang="less" scoped>
.cart {
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
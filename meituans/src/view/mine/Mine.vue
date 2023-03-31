<template>
    <div class="mine">
        <div class="content">我的</div>
        <Footer />
    </div>
</template>
    
<script>
import Footer from '@/components/Footer.vue';
export default {
    components: {
        Footer,
    },
}
</script>
    
<style lang="less" scoped>
.mine {
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
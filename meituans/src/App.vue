<template>
  <!-- 路由出口 -->
  <router-view />
  <div class="app">
    <div class="content"></div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
export default {
  name: 'App',
  components: {
    Footer,
  },
}
</script>

<style lang="less" scoped>
.app {
  width: 100%;
  display: flex;
  flex-flow: column;
  position: fixed;
  bottom: 0;

  .content {
    flex: 1;
    /*
        设置当内容溢出块级元素的上下两侧时所显示的内容
        取决于浏览器本身。当内容发生溢出时，桌面浏览器如 Firefox 会显示滚动条
        */
    overflow-y: auto;
  }
}
</style>    

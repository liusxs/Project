<template>
  <div id="app">
    <Head></Head>
    <Carousel></Carousel>
    <Recommend></Recommend>
    <boutique></boutique>
    <Load></Load>
    <Footer></Footer>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Head from "./components/Head.vue";
import Carousel from "./views/Carousel .vue";
import Recommend from "./views/Recommend.vue";
import Boutique from "./views/Boutique.vue";
import Footer from "./components/Footer.vue";
import Load from "./views/Load.vue"
export default {
  name: "app",
  components: {
    Head,
    Carousel,
    Footer,
    Recommend,
    Boutique,
    Load,
  },
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
</style>

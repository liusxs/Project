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
import Head from "./components/Head";
import Carousel from "./views/Carousel";
import Recommend from "./views/Recommend";
import Boutique from "./views/BoutiQue";
import Footer from "./components/Footer";
import Load from "./views/Load"
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

</style>

<template>
  <div id="app">
    <router-link to="/head">head</router-link>
    <router-link to="/boutique">boutique</router-link>
    <router-link to="/recommend">recommend</router-link>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
</style>

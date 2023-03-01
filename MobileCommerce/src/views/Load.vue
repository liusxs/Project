<template>
  <div class="load-text">
    <span>下拉加载更多...</span>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.load-text {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 60px;
  line-height: 60px;
  margin-top: 20px;
  background-color: rgb(238, 238, 238);
  span {
    font-size: 32px;
  }
}
</style>
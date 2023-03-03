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
  height: 40px;
  line-height: 40px;
  margin-top: 5px;
  background-color: rgb(238, 238, 238);
  span {
    font-size: 16px;
  }
}
</style>
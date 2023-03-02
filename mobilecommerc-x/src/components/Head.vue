<template>
  <div class="head">
    <input type="text" placeholder="搜索商品/店铺" />
    <div class="icon"></div>
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
.head {
  height: 96px;
  background-color: rgb(246, 86, 86);
  /** 弹性布局 **/
  display: flex;
  justify-content: center;
  /** 垂直居中      使用align-items或align-content的属性，就可以做到垂直居中的效果 **/
  align-items: center;
}
input {
  height: 60px;
  font-size: 24px;
  font-weight: bold;
  padding: 10px;
  border: 0;
  border-radius: 10px;
  &:focus {
    outline: none;
  }
}
.icon {
  height: 60px;
  width: 60px;
  background-color: rgb(12, 52, 227);
  z-index: 666;
  margin-left: 15px;
}
</style>
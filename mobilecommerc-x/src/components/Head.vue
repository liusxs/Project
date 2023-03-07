<template>
  <div class="head">
    <input type="text" placeholder="搜索商品/店铺" />
    <i class="iconfont  icon-wodefangjian"></i>
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
  background-color: rgb(246, 86, 86);
  /** 弹性布局 **/
  display: flex;
  justify-content: center;
  /** 垂直居中      使用align-items或align-content的属性，就可以做到垂直居中的效果 **/
  align-items: center;

  input {
    font-size: 14px;
    font-weight: bold;
    padding: 4px;
    border: 0;
    border-radius: 3px;

    &:focus {
      outline: none;
    }
  }
  .iconfont{
    font-size: 30px;
  }
}
</style>
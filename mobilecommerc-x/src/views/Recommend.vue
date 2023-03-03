<template>
  <div class="recommend">
    <div class="recomHeadr">
      <i class="icon">字</i>
      <span>精品推荐</span>
    </div>
    <div class="recomContent">
      <div class="content-img">
        <img src="../assets/img/d_sp_03.png" alt="" />
        <span>爆款连衣裙</span>
        <span>￥200</span>
      </div>
      <div class="content-img">
        <img src="../assets/img/d_sp_04.png" alt="" />
        <span>爆款连衣裙</span>
        <span>￥200</span>
      </div>
      <div class="content-img">
        <img src="../assets/img/d_sp_05.png" alt="" />
        <span>爆款连衣裙</span>
        <span>￥200</span>
      </div>
      <div class="content-img">
        <img src="../assets/img/d_sp_06.png" alt="" />
        <span>爆款连衣裙</span>
        <span>￥200</span>
      </div>
    </div>
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
.recommend {
  margin-top: 5px;
  background-color: rgb(255, 255, 255);
  .recomHeadr {
    padding: 10px;
    .icon {
      font-size: 16px;
    }
    span {
      font-size: 16px;
      font-weight: bold;
    }
  }
  .recomContent {
    display: flex;
    justify-content: space-around;
    .content-img {
      text-align: center;
      width: 120;
      img {
        width: 80px;
        height: 90px;
      }
      span {
        font-size: 12px;
      }
    }
  }
}
</style>
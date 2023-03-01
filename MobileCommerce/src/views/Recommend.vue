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
  margin-top: 10px;
  background-color: rgb(255, 255, 255);
  .recomHeadr {
    padding: 30px;
    .icon {
      font-size: 32px;
    }
    span {
      font-size: 32px;
      font-weight: bold;
    }
  }
  .recomContent {
    display: flex;
    justify-content: space-around;
    .content-img {
      width: 180px;
      text-align: center;
      img {
        width: 180px;
        height: 220px;
      }
      span {
        font-size: 32px;
        padding: 10px;
      }
    }
  }
}
</style>
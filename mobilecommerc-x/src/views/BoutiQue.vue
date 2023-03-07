<template>
  <div class="boutique">
    <div class="butique-headr">
      <i class="iconfont icon-gongneng_xingxing-"></i>
      <span>精品</span>
    </div>
    <div class="butique-content">
      <div class="content-box">
        <div class="content-img">
          <img src="../assets/img/d_sp_03.png" alt="" />
        </div>
        <span>iPhone6 4.7英寸 64G</span>
        <div class="content-text">
          <span>￥200</span>
          <span>购买</span>
        </div>
      </div>
      <div class="content-box">
        <div class="content-img">
          <img src="../assets/img/d_sp_03.png" alt="" />
        </div>
        <span>iPhone6 4.7英寸 64G</span>
        <div class="content-text">
          <span>￥200</span>
          <span>购买</span>
        </div>
      </div>
      <div class="content-box">
        <div class="content-img">
          <img src="../assets/img/d_sp_03.png" alt="" />
        </div>
        <span>iPhone6 4.7英寸 64G</span>
        <div class="content-text">
          <span>￥200</span>
          <span>购买</span>
        </div>
      </div>
      <div class="content-box">
        <div class="content-img">
          <img src="../assets/img/d_sp_03.png" alt="" />
        </div>
        <span>iPhone6 4.7英寸 64G</span>
        <div class="content-text">
          <span>￥200</span>
          <span>购买</span>
        </div>
      </div>
      <div class="content-box">
        <div class="content-img">
          <img src="../assets/img/d_sp_03.png" alt="" />
        </div>
        <span>iPhone6 4.7英寸 64G</span>
        <div class="content-text">
          <span>￥200</span>
          <span>购买</span>
        </div>
      </div>
      <div class="content-box">
        <div class="content-img">
          <img src="../assets/img/d_sp_03.png" alt="" />
        </div>
        <span>iPhone6 4.7英寸 64G</span>
        <div class="content-text">
          <span>￥200</span>
          <span>购买</span>
        </div>
      </div>
      <div class="content-box">
        <div class="content-img">
          <img src="../assets/img/d_sp_03.png" alt="" />
        </div>
        <span>iPhone6 4.7英寸 64G</span>
        <div class="content-text">
          <span>￥200</span>
          <span>购买</span>
        </div>
      </div>
      <div class="content-box">
        <div class="content-img">
          <img src="../assets/img/d_sp_03.png" alt="" />
        </div>
        <span>iPhone6 4.7英寸 64G</span>
        <div class="content-text">
          <span>￥200</span>
          <span>购买</span>
        </div>
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
.boutique {
  width: 100%;
  margin-top: 5px;
  background-color: rgb(242, 242, 242);
  .butique-headr {
    padding: 10px;
    .iconfont {
      font-size: 28px;
    }
    span {
      font-size: 16px;
      font-weight: bold;
    }
  }
  .butique-content {
    text-align: center;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .content-box {
      margin-top: 5px;
      background-color: rgb(255, 255, 255);
      .content-img {
        margin: 15px;
        img {
          width: 150px;
          height: 150px;
        }
      }
      span {
        font-size: 12px;
      }
      .content-text {
        display: flex;
        justify-content: space-evenly;
        span {
          font-size: 12px;
        }
      }
    }
  }
}
</style>
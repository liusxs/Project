<template>
  <div class="boutique">
    <div class="butique-headr">
      <i class="icon">字</i>
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
  margin-top: 10px;
  background-color: rgb(242, 242, 242);
  .butique-headr {
    padding: 30px;
    .icon {
      font-size: 32px;
    }
    span {
      font-size: 32px;
      font-weight: bold;
    }
  }
  .butique-content {
    text-align: center;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .content-box {
      margin-top: 20px;
      width: 470px;
      background-color: rgb(255, 255, 255);
      .content-img {
        img {
          width: 415px;
          height: 400px;
          margin: 20px;
        }
      }
      span {
        font-size: 26px;
        font-weight: bold;
      }
      .content-text {
        display: flex;
        justify-content: space-evenly;
        span {
          font-size: 32px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
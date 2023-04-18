<template>
    <div class="showImg">
      <!-- 轮播图片 -->
      <img
        @mouseover="changeInterval(true)"
        @mouseleave="changeInterval(false)"
        v-for="item in imgArr"
        :key="item.id"
        :src="item.url"
        alt="暂无图片"
        v-show="item.id === currentIndex"
      />
      <!-- 左侧按钮 -->
      <div @click="clickIcon('up')" class="iconDiv icon-left">
        <i class="el-icon-caret-left"></i>
      </div>
      <!-- 右侧按钮 -->
      <div @click="clickIcon('down')" class="iconDiv icon-right">
        <i class="el-icon-caret-right"></i>
      </div>
      <!-- 控制圆点 -->
      <div class="banner-circle">
        <ul>
          <li
            @click="changeImg(item.id)"
            v-for="item in imgArr"
            :key="item.id"
            :class="item.id === currentIndex ? 'active' : ''"
          ></li>
        </ul>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        currentIndex: 0, //当前所在图片下标
        timer: null, //定时轮询
        imgArr: [
          {
            id: 0,
            url: require("../../assets/img/banner1.jpg"),
          },
          {
            id: 1,
            url: require("../../assets/img/banner2.jpg"),
          },
          {
            id: 2,
            url: require("../../assets/img/banner3.jpg"),
          },
        ],
      };
    },
    methods: {
      //开启定时器
      startInterval() {
        // 事件里定时器应该先清除在设置，防止多次点击直接生成多个定时器
        clearInterval(this.timer);
        this.timer = setInterval(() => {
          this.currentIndex++;
          if (this.currentIndex > this.imgArr.length - 1) {
            this.currentIndex = 0;
          }
        }, 3000);
      },
      // 点击左右箭头
      clickIcon(val) {
        if (val === "down") {
          this.currentIndex++;
          if (this.currentIndex === this.imgArr.length) {
            this.currentIndex = 0;
          }
        } else {
          /* 第一种写法
                      this.currentIndex--;
                      if(this.currentIndex < 0){
                          this.currentIndex = this.imgArr.length-1;
                      } */
          // 第二种写法
          if (this.currentIndex === 0) {
            this.currentIndex = this.imgArr.length;
          }
          this.currentIndex--;
        }
      },
      // 点击控制圆点
      changeImg(index) {
        this.currentIndex = index;
      },
      //鼠标移入移出控制
      changeInterval(val) {
        if (val) {
          clearInterval(this.timer);
        } else {
          this.startInterval();
        }
      },
    },
    //进入页面后启动定时轮询
    mounted() {
      this.startInterval();
    },
  };
  </script>
  <style lang="less" scoped>
  /* 清除li前面的圆点 */
  li {
    list-style-type: none;
  }
  .showImg {
    position: relative;
    width: 85%;
    margin: 0 auto;
    overflow: hidden;
    /* 轮播图片 */
    img {
      width: 100%;
      height: 100%;
    }
    /* 箭头图标 */
    .iconDiv {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      border: 1px solid #666;
      border-radius: 20px;
      background-color: rgba(125, 125, 125, 0.2);
      line-height: 20px;
      text-align: center;
      font-size: 25px;
      cursor: pointer;
    }
    .iconDiv:hover {
      background-color: white;
    }
    .icon-left {
      left: 10px;
    }
    .icon-right {
      right: 10px;
    }
  
    /* 控制圆点 */
    .banner-circle {
      position: absolute;
      bottom: 10px;
      width: 100%;
      height: 20px;
    }
    .banner-circle ul {
      margin: 0 50px;
      height: 100%;
      text-align: right;
    }
    .banner-circle ul li {
      display: inline-block;
      width: 15px;
      height: 15px;
      margin: 0 5px;
      border-radius: 10px;
      background-color: rgba(125, 125, 125, 0.8);
      cursor: pointer;
    }
    .active {
      background-color: black !important;
    }
  }
  </style>
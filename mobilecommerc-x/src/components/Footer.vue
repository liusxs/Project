<template>
    <div class="footer-icon">
    <i class="iconfont  icon-wodefangjian"></i>
    <i class="iconfont  icon-fenleiliebiao"></i>
    <i class="iconfont  icon-gouwuchekong"></i>
    <i class="iconfont  icon-wode"></i>
    </div>
</template>
<script>
export default{
    data(){
        return{}
    }
}
</script>
<style lang="less" scoped>
.footer-icon{
    width: 100%;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: space-around;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 666;
    background-color: rgb(244, 244, 243);
    .iconfont{
        font-size: 24px;
        color: black;
        font-weight: bold;
    }
}
</style>
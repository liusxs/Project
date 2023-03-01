<template>
    <div class="footer-icon">
    <i>2</i>
    <i>2</i>
    <i>3</i>
    <i>4</i>
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
    height: 120px;
    line-height: 120px;
    display: flex;
    justify-content: space-around;
    font-size: 32px;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 666;
    background-color: rgb(244, 244, 243);
}
</style>
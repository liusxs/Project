<template>
    <div class="empty">
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tuijian"></use>
        </svg>
        一件宝贝都没有哦！
    </div>
</template>
<style lang="less" scoped>
.empty {
    flex: 1;
    margin: 20px;
    font-size: 16px;
    overflow-y: auto;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 10px;
    height: 72vh;

    .icon {
        margin-bottom: 10px;
    }
}
</style>
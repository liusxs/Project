<template>
    <div class="header">
        <van-icon name="arrow-left" class="icon" />
        <div class="edit">{{ title }}</div>
    </div>
</template>
<script>
export default {
    props: ["title"],
};


</script>

<style lang="less" scoped>
.header {
    background-color: #fff;
    height: 40px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #d7d7d7;

    .edit {
        font-size: 16px;
        position: absolute;
        right: 15px;
        font-weight: normal;
    }

    .icon {
        position: absolute;
        left: 10px;
    }
}
</style>
<template>
    <div class="header">
        <van-icon name="arrow-left" class="icon" @click="toBack" />
        <div>{{ title }}</div>
        <div class="edit" v-if="edit">
            编辑
        </div>
    </div>
</template>
<script>
import { useRouter } from 'vue-router';

export default {
    props: ["title","edit"],
    setup() {
        const router = useRouter();
        const toBack = () => {
            router.back();
        };
        return {
            toBack,
        };
    },
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
        font-weight: normal;
        position: absolute;
        right: 15px;
    }

    .icon {
        position: absolute;
        left: 10px;
    }
}
</style>
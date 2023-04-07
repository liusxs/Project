<template>
    <div class="header">
        <van-icon name="arrow-left" class="icon" @click="toBack" />
        <div>{{ title }}</div>
        <div class="edit" v-if="edit" @click="handleEdit">
            {{ store.state.edit ? '编辑' : '完成' }}
        </div>
    </div>
</template>
<script>
import store from '@/store';
import { showToast } from 'vant';
import { useRouter } from 'vue-router';

export default {
    props: ["title", "edit"],
    setup() {
        const router = useRouter();
        const toBack = () => {
            router.back();
        };
        const handleEdit = () => {
            if (store.state.cartList.length) {
                store.commit('edit')
                store.commit('changDelete')
            } else {
                showToast('请添加商品到购物车!')
            }
        }
        return {
            toBack,
            handleEdit,
            store,
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
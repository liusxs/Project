<template>
    <div class="address">
        <Header title="地址管理" />
        <van-address-list :list="list" default-tag-text="默认" @add="onAdd" @edit="onEdit" />
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import { reactive, toRefs } from 'vue'
export default {
    components: {
        Header,
    },
    setup() {
        const onAdd = () => { }
        const onEdit = () => { }
        const data = reactive({
            list:[]
        })
        return {
            onAdd,
            onEdit,
            ...toRefs(data),
        }
    }
}
</script>
<style lang="less" scoped>
/deep/.van-button {
    background-color: #ffc400;
    border-color: #ffc400;
}

/deep/.van-address-list__bottom {
    border-color: #ffc400;
    padding: 0;
}
</style>
<template>
    <div class="address">
        <Header title="地址管理" />
        <van-address-list :list="list" default-tag-text="默认" @add="onAdd" @edit="onEdit" />
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import { reactive, toRefs, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
export default {
    components: {
        Header,
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const onAdd = () => {
            router.push({
                path: '/addressEdit',
                query: {
                    type: 'add'
                }
            })
        }
        const onEdit = (item) => {
            router.push({
                path: '/addressEdit',
                query: {
                    id: item.id,
                    type: 'edit'
                }
            })
        }
        const data = reactive({
            list: [

            ],
        })
        const init = () => {
            data.list = store.state.userAddress.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    tel: item.tel,
                    address: `${item.province}${item.city}${item.conuty}${item.addressDetail}`,
                    isDefault: item.isDefault,
                }
            })
        }
        onMounted(() => {
            init();
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
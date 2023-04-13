<template>
    <div class="addressEdit">
        <Header :title="address" />
        <van-address-edit :area-list="areaList" show-delete show-set-default show-search-result :address-info="addressInfo"
            :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" @delete="onDelete" />
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import { useStore } from 'vuex';
import { reactive, toRefs, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { showToast } from 'vant'
export default {
    components: {
        Header,
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const store = useStore();
        const data = reactive({
            areaList: {
                province_list: {
                    110000: '土星',
                    120000: '水星'
                },
                city_list: {
                    110100: '风',
                    110200: '雷',
                    120100: '水',
                    120200: '电'
                },
                county_list: {
                    110101: '苍天已死',
                    110202: '黄天当立',
                    120101: '岁在甲子',
                    120202: '天下大吉'
                },
            },
            addressInfo: {

            }
        })
        const onSave = (content) => {
            //新增或编辑
            if (route.query.type === 'add') {
                store.commit('addaddress', content)
            } else {
                store.commit('editaddress', content)
            }
            showToast('保存成功')
            setTimeout(() => {
                router.back();
            }, 1000)
        }
        const onDelete = (content) => {
            store.commit("deleteaddress", content)
            showToast('删除成功')
            setTimeout(() => {
                router.back();
            }, 1000)
        }
        const init = () => {
            store.state.userAddress.forEach((item) => {
                if (item.id === route.query.id) {
                    data.addressInfo = item;
                }
            })
        }
        const address = computed(() => {
            return route.query.type === 'add' ? '地址新增' : '地址编辑'
        })
        onMounted(() => {
            init();
        })
        return {
            ...toRefs(data),
            onSave,
            onDelete,
            route,
            address,
        }
    }
}
</script>
<style lang="less" scoped></style>
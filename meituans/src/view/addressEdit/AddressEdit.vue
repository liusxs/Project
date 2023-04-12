<template>
    <div class="addressEdit">
        <Header title="编辑地址" />
        <van-address-edit :area-list="areaList" show-delete show-set-default show-search-result
            :area-columns-placeholder="['请选择', '请选择', '请选择']" @save="onSave" @delete="onDelete" />
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import { reactive, toRefs, } from 'vue'
export default {
    components: {
        Header,
    },
    setup() {
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
            }
        })
        const onSave = () => {}
        const onDelete = () => {}
        return{
            ...toRefs(data),
            onSave,
            onDelete,
        }
    }
}
</script>
<style lang="less" scoped></style>
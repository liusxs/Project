<template>
    <div class="cartDetail">
        <div class="content">
            <van-checkbox-group v-model="checked" ref="checkboxGroup">
                <div v-for="(item, index) in store.state.cartList">
                    <ListItem :item="item" :handleAdd="handleAdd" :showCheckBox="true"/>
                </div>
            </van-checkbox-group>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { useStore } from 'vuex';
import ListItem from '@/components/ListItem.vue';
export default {
    components: {
        ListItem,
    },
    setup() {
        const store = useStore()
        const data = reactive({
            checked: []
        });
        const handleAdd = () => { }
        return {
            ...toRefs(data),
            store,
            handleAdd
        }
    }
}
</script>

<style lang="less" scoped>
.cartDetail {
    font-size: 14px;
    flex: 1;
    position: relative;
    overflow-y: auto;
    padding: 20px 20px 55px;

    .submit_all {
        position: fixed;
        bottom: 48px;
    }

    .buy {
        position: fixed;
        bottom: 48px;
        right: 0;
        display: flex;
        justify-content: space-between;
        width: 100%;
        background-color: #fff;
        border-radius: 10px;
        height: 50px;
        align-items: center;
        padding: 0 16px;
        box-sizing: border-box;

        .left {
            display: flex;
            align-items: center;
        }

        .delete {
            color: #fff;
            background-color: #ffc400;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 600;
            width: 110px;
            height: 40px;
            text-align: center;
            line-height: 40px;
        }
    }
}
</style>
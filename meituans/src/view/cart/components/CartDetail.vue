<template>
    <div class="cartDetail">
        <div class="content">
            <van-checkbox-group v-model="checked" @change="groupChange">
                <div v-for="(item, index) in store.state.cartList">
                    <ListItem :item="item" :handleAdd="handleChange" :showCheckBox="true" />
                </div>
            </van-checkbox-group>
        </div>
        <van-submit-bar :price="allPrice" button-text="结算" @submit="onSubmit" class="submit_all" buttonColor="#ffc400">
            <van-checkbox v-model="submitChecked" checked-color="#ffc400" @click="choseAll">全选</van-checkbox>
        </van-submit-bar>
        <div class="buy">
            <div class="left">
                <van-checkbox v-model="submitChecked" checked-color="#ffc400" @click="choseAll">全选</van-checkbox>
            </div>
            <div class="delete">删除</div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import ListItem from '@/components/ListItem.vue';
export default {
    components: {
        ListItem,
    },
    setup() {
        //购物车选中实现
        const store = useStore()
        const data = reactive({
            checked: [],
            submitChecked: true
        });
        const handleChange = (value, detail) => {
            store.state.cartList.map(item => {
                if (item.id === detail.name) {
                    item.num = value;
                }
            })
        };
        const init = () => {
            data.checked = store.state.cartList.map(item => item.id)
        }
        onMounted(() => {
            init()
        })
        const onSubmit = () => {

        }
        const choseAll = () => {
            if (data.checked.length !== store.state.cartList.length) {
                init()
            } else {
                data.checked = []
            }
        }
        const groupChange = (result) => {
            if (result.length === store.state.cartList.length) {
                data.submitChecked = true;
            } else {
                data.submitChecked = false;
            }
            data.checked = result;
        }
        //购物车价格实现
        const allPrice = computed(() => {
            let countList = store.state.cartList.filter(item => {
                return data.checked.includes(item.id)
            })
            let sum = 0
            countList.forEach(item => {
                sum += item.num * item.price
            });
            return sum * 100;
        })
        return {
            ...toRefs(data),
            store,
            handleChange,
            onSubmit,
            choseAll,
            groupChange,
            allPrice,
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
        bottom: 46px;
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
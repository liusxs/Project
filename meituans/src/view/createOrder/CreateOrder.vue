<template>
    <div class="createorder">
        <Header title="生成订单" />
        <van-contact-card type="edit" :tel="tel" :name="name" @click="onEdit" />
        <div class="content">
            <div v-for="(item, index) in store.state.orderList">
                <van-card :num="item.num" :price="item.price"  :title="item.title"
                    :thumb="item.pic" />
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import { reactive, toRefs } from 'vue'
import { useStore } from "vuex";
export default {
    components: {
        Header,
    },
    setup() {
        const data = reactive({
            tel: '1666666666',
            name: 'liuliu'
        })
        const store = useStore()

        const onEdit = () => {

        }
        return {
            ...toRefs(data),
            onEdit,
            store,
        }
    }
}
</script>
<style lang="less" scoped>
.createorder {
    display: flex;
    flex-flow: column;
    height: 100%;

    .content {
        flex: 1;
        overflow-y: auto;
    }

    .pay_wrap {
        padding: 10px 0;
        width: 100%;
        background: #fff;
        border-top: 1px solid #e9e9e9;

        >div {
            display: flex;
            justify-content: space-between;
            padding: 0 5%;
            margin: 10px 0;
            font-size: 14px;

            span:nth-child(2) {
                color: red;
                font-size: 18px;
            }
        }

        .pay_btn {
            width: 99%;
            margin: 0 auto;
        }
    }
}
</style>
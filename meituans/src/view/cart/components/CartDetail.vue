<template>
    <div class="cartDetail">
        <div class="content">
            <van-checkbox-group v-model="checked" @change="groupChange">
                <div v-for="(item, index) in store.state.cartList">
                    <ListItem :item="item" :handleAdd="handleChange" :showCheckBox="true" />
                </div>
            </van-checkbox-group>
        </div>
        <van-submit-bar :price="allPrice" button-text="结算" @submit="onSubmit" class="submit_all" buttonColor="#ffc400"
            v-if="store.state.isDelete">
            <van-checkbox v-model="submitChecked" checked-color="#ffc400" @click="choseAll">全选</van-checkbox>
        </van-submit-bar>
        <div class="buy" v-else>
            <div class="left">
                <van-checkbox v-model="submitChecked" checked-color="#ffc400" @click="choseAll">完成</van-checkbox>
            </div>
            <div class="delete" @click="hanldeDelete">删除</div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { showToast } from 'vant';
import ListItem from '@/components/ListItem.vue';
export default {
    props: ['changeshow'],
    components: {
        ListItem,
    },
    setup(props) {
        //购物车选中实现
        const store = useStore()
        const router = useRouter()
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
        //结算
        const onSubmit = () => {
            if (data.checked.length) {
                store.commit('pay', updateDalete())
                router.push({
                    path:'/createorder',
                    query:{
                        list:data.checked,
                    }
                })
            }else{
                showToast('请选择!')
            }
        }
        //购物车勾选功能
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
            let countList = updateDalete();
            let sum = 0
            countList.forEach(item => {
                sum += item.num * item.price
            });
            return sum * 100;
        })
        const updateDalete = (type) => {
            return store.state.cartList.filter((item) => {
                return type === 'delete' ? !data.checked.includes(item.id) : data.checked.includes(item.id)
            })
        }
        const hanldeDelete = () => {
            //判断data的checked是否有值
            if (data.checked.length) {
                store.commit('delete', updateDalete('delete'));
                data.checked = []
                //购物车没有数据的时候
                if (!store.state.cartList.length) {
                    props.changeshow();
                    store.commit('edit', 'delete')
                }
            } else {
                showToast('请选择要删除的商品!')
            }
            //部分删除
            //全部删除
        }
        return {
            ...toRefs(data),
            store,
            handleChange,
            onSubmit,
            choseAll,
            groupChange,
            allPrice,
            hanldeDelete,
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
        bottom: 46px;
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
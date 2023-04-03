<template>
    <div class="FoodList" v-if="index === 0">
        <van-tree-select v-model:main-active-index="activeIndex" height="88vw" :items="items" @click-nav="navClick">
            <template #content>
                <div v-for="(item, index) in subItem" class="item_bg">
                    <FoodListItem :item="item" :handleAdd="handleAdd" :handleChange="handleChange" />
                </div>
            </template>
        </van-tree-select>
    </div>
    <div v-else>
        {{ foodData.content }}
    </div>
</template>
<script>
import { reactive, toRefs } from 'vue';
import FoodListItem from './FoodListItem.vue';
export default {
    props: ["index", "foodData"],
    components: {
        FoodListItem,
    },
    setup(props) {
        let data = reactive({
            activeIndex: 0,
            items: [],
            subItem: [],
        });
        //初始化数据
        const initData = () => {
            let newArray = []
            // ?表示数据如果有则继续向下执行 否则停止
            props.foodData?.items?.forEach((item, index) => {
                newArray.push({
                    text: item.text
                });
                //循环遍历后最后的 subItem 的一项
                if (data.activeIndex === index) {
                    data.subItem = item.children;
                }
            });
            data.items = newArray;
        };
        initData();
        const navClick = (i) => {
            console.log(i);
            data.activeIndex = i;
            initData();
        };
        const handleAdd = (id) => {
            data.subItem.forEach((item, index) => {
                if (item.id === id) {
                    item.add = false;
                    item.num += 1;
                }
            })
        };
        const handleChange = (value, detail) => {
            data.subItem.forEach(item=>{
                if(item.id === detail.name){
                    item.num = value;
                }
            });
            //console.log(data.subItem)
         };
        return {
            ...toRefs(data),
            navClick,
            handleAdd,
            handleChange,
        }
    },
};
</script>
<style lang="less" scoped>
.FoodList {
    margin-top: 20px;

    .item_bg {
        padding: 10px;
    }
}

/*
        未生效！！！
/deep/.van-tree-select__item-active{
    color: #ffc400;
}
*/
/deep/.van-sidebar-item--select::before {
    background-color: #ffc400;
}
</style>
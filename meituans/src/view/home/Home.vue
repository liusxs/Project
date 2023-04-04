<template>
    <div class="home">
        <div class="content">
            <!--头部  -->
            <div class="header">
                <div class="text">商城</div>
                <div class="location">
                    <van-icon name="location-o" />
                    <span>定位</span>
                    <van-icon name="arrow" />
                </div>
            </div>
            <!-- 小菜单 -->
            <div class="main">
                <div class="main_bg">
                    <div class="search">
                        <input type="text">
                        <div class="search-text">搜索</div>
                    </div>
                    <div class="sort">
                        <div class="big_sort">
                            <div v-for="(item, index) in big_sort" :key="index">
                                <svg class="icon" aria-hidden="true">
                                    <!-- `#${item.icon}` 这是模板字符串 -->
                                    <use :xlink:href="`#${item.icon}`"></use>
                                </svg>
                                {{ item.name }}
                            </div>
                        </div>
                        <div class="small_sort">
                            <div v-for="(item, index) in small_sort" :key="index">
                                <svg class="icon" aria-hidden="true">
                                    <use :xlink:href="`#${item.icon}`"></use>
                                </svg>
                                {{ item.name }}
                            </div>
                        </div>
                    </div>
                </div>
                <van-tabs v-model:active="active" class="vant_tabs">
                    <van-tab v-for="(item,index) in centent_nav_list" :title="item.tab" :key="index">
                        <NavList :navList="item.data"/>
                    </van-tab>
                </van-tabs>
            </div>
        </div>
        <Footer />
    </div>
</template>
    
<script>
import Footer from '@/components/Footer.vue';
import { reactive, toRefs, ref } from 'vue'
import NavList from './components/NavList.vue'
export default {
    components:{
        Footer,
        NavList
    },
    setup() {
        const active = ref(0);
        let data = reactive({
            big_sort: [
                {
                    name: "男装",
                    icon: "icon-tuijian",
                },
                {
                    name: "女装",
                    icon: "icon-tuijian",
                },
                {
                    name: "衣服",
                    icon: "icon-tuijian",
                },
                {
                    name: "裤子",
                    icon: "icon-tuijian",
                },
                {
                    name: "外套",
                    icon: "icon-tuijian",
                },
            ],
            small_sort: [
                {
                    name: "衣服",
                    icon: "icon-tuijian",
                },
                {
                    name: "裤子",
                    icon: "icon-tuijian",
                },
                {
                    name: "衬衫",
                    icon: "icon-tuijian",
                },
                {
                    name: "短裤",
                    icon: "icon-tuijian",
                },
                {
                    name: "风衣",
                    icon: "icon-tuijian",
                },
                {
                    name: "卫衣",
                    icon: "icon-tuijian",
                },
                {
                    name: "上衣",
                    icon: "icon-tuijian",
                },
                {
                    name: "鞋子",
                    icon: "icon-tuijian",
                },
                {
                    name: "帽子",
                    icon: "icon-tuijian",
                },
                {
                    name: "手套",
                    icon: "icon-tuijian",
                },
            ],
            centent_nav_list: [
                {
                    tab: "精品推荐",
                    data: [
                        {
                            pic: "https://github.com/liusxs/Project/blob/main/mobilecommerc-x/src/assets/img/d_sp_03.png?raw=true",
                            title: "卫龙衣物",
                            sales: "2888",
                            price: "20",
                            label: ["门店上新", "促销"],
                        },
                        {
                            pic: "https://github.com/liusxs/Project/blob/main/mobilecommerc-x/src/assets/img/d_sp_03.png?raw=true",
                            title: "卫龙衣物",
                            sales: "2888",
                            price: "20",
                            label: ["门店上新", "促销"],
                        },
                        {
                            pic: "https://github.com/liusxs/Project/blob/main/mobilecommerc-x/src/assets/img/d_sp_03.png?raw=true",
                            title: "卫龙衣物",
                            sales: "2888",
                            price: "20",
                            label: ["门店上新", "促销"],
                        },
                        {
                            pic: "https://github.com/liusxs/Project/blob/main/mobilecommerc-x/src/assets/img/d_sp_03.png?raw=true",
                            title: "卫龙衣物",
                            sales: "2888",
                            price: "20",
                            label: ["门店上新", "促销"],
                        },
                    ],
                },
                {
                    tab: "热销产品",
                    data: [
                        {
                            pic: "https://github.com/liusxs/Project/blob/main/mobilecommerc-x/src/assets/img/d_sp_03.png?raw=true",
                            title: "卫龙衣物",
                            sales: "2888",
                            price: "20",
                            label: ["门店上新", "促销"],
                        },
                    ],
                },
                {
                    tab: "打折促销",
                    data: [
                        {
                            pic: "https://github.com/liusxs/Project/blob/main/mobilecommerc-x/src/assets/img/d_sp_03.png?raw=true",
                            title: "卫龙衣物",
                            sales: "2888",
                            price: "20",
                            label: ["门店上新", "促销"],
                        },
                        {
                            pic: "https://github.com/liusxs/Project/blob/main/mobilecommerc-x/src/assets/img/d_sp_03.png?raw=true",
                            title: "卫龙衣物",
                            sales: "2888",
                            price: "20",
                            label: ["门店上新", "促销"],
                        },
                    ],
                },
                {
                    tab: "限时出售",
                    data: [
                        {
                            pic: "https://github.com/liusxs/Project/blob/main/mobilecommerc-x/src/assets/img/d_sp_03.png?raw=true",
                            title: "卫龙衣物",
                            sales: "2888",
                            price: "20",
                            label: ["门店上新", "促销"],
                        },
                        {
                            pic: "https://github.com/liusxs/Project/blob/main/mobilecommerc-x/src/assets/img/d_sp_03.png?raw=true",
                            title: "卫龙衣物",
                            sales: "2888",
                            price: "20",
                            label: ["门店上新", "促销"],
                        },
                    ],
                },
            ],
        })
        return {
            ...toRefs(data),
            active,
        }
    }
}
</script>
    
<style lang="less" scoped>
.home {
    display: flex;
    flex-flow: column;
    height: 100%;
    .content {
        flex: 1;
        overflow-y: auto;
        font-size: 12px;
        /*
            设置当内容溢出块级元素的上下两侧时所显示的内容
            取决于浏览器本身。当内容发生溢出时，桌面浏览器如 Firefox 会显示滚动条
        */
      }

    .header {
        background-image: linear-gradient(#ffc400, #fff);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 20px 40px 20px;

        .text {
            font-size: 20px;
            font-weight: 600;
        }

        .location {
            span {
                margin: 0 5px;
            }

            font-size: 14px;
        }
    }

    .main {
        margin-top: -30px;

        .main_bg {
            background-image: linear-gradient(#fff, #f5f5f5);
            padding: 10px 20px 0 20px;
            border-radius: 30px 30px 0 0;

            .search {
                position: relative;

                input {
                    width: 100%;
                    border: 1px solid #ffc400;
                    border-radius: 20px;
                    height: 30px;
                }

                .search-text {
                    position: absolute;
                    right: -6px;
                    top: 1px;
                    background-color: #ffc400;
                    border-radius: 14px;
                    width: 50px;
                    height: 32px;
                    line-height: 32px;
                    font-size: 14px;
                    text-align: center;
                }
            }

            .sort {
                padding: 20px 0;

                .big_sort {
                    display: flex;

                    div {
                        flex: 1;
                        display: flex;
                        justify-content: center;
                        flex-flow: column;
                        align-items: center;
                    }

                    .icon {
                        width: 50px;
                        height: 50px;
                        margin-bottom: 5px;
                    }
                }

                .small_sort {
                    display: flex;
                    flex-wrap: wrap;
                    margin-top: 20px;

                    div {
                        display: flex;
                        justify-content: center;
                        flex-flow: column;
                        align-items: center;
                        width: 20%;
                    }

                    .icon {
                        width: 30px;
                        height: 30px;
                        margin: 10px;
                    }
                }
            }
        }

        .vant_tabs {
            padding: 0 20px 10px;
        }
    }
}

/deep/.van-tabs__wrap {
    border-radius: 20px;
}
</style>    
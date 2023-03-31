<template>
    <div class="home">
        <div class="content">
            <!--头部  -->
            <div class="header">
                <div class="text">外卖</div>
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
    </div>
</template>
    
<script>
import { reactive, toRefs, ref } from 'vue'
import NavList from './components/NavList.vue'
export default {
    components:{
        NavList
    },
    setup() {
        const active = ref(0);
        let data = reactive({
            big_sort: [
                {
                    name: "00",
                    icon: "icon-wucan",
                },
                {
                    name: "01",
                    icon: "icon-wucan",
                },
                {
                    name: "02",
                    icon: "icon-wucan",
                },
                {
                    name: "03",
                    icon: "icon-wucan",
                },
                {
                    name: "04",
                    icon: "icon-wucan",
                },
            ],
            small_sort: [
                {
                    name: "05",
                    icon: "icon-wucan",
                },
                {
                    name: "06",
                    icon: "icon-wucan",
                },
                {
                    name: "07",
                    icon: "icon-wucan",
                },
                {
                    name: "08",
                    icon: "icon-wucan",
                },
                {
                    name: "09",
                    icon: "icon-wucan",
                },
                {
                    name: "10",
                    icon: "icon-wucan",
                },
                {
                    name: "11",
                    icon: "icon-wucan",
                },
                {
                    name: "12",
                    icon: "icon-wucan",
                },
                {
                    name: "13",
                    icon: "icon-wucan",
                },
                {
                    name: "14",
                    icon: "icon-wucan",
                },
            ],
            centent_nav_list: [
                {
                    tab: "4399",
                    data: [
                        {
                            pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F2062a5b3-a52f-4b38-aaa4-1f94eb74238d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682816689&t=b19f5ca6b297b0e5c8400037b4462db4",
                            title: "酸菜鱼",
                            sales: "2888",
                            price: "20",
                            label: ["门店上新", "很下饭"],
                        },
                        {
                            pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F2062a5b3-a52f-4b38-aaa4-1f94eb74238d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682816689&t=b19f5ca6b297b0e5c8400037b4462db4",
                            title: "饭",
                            sales: "2888",
                            price: "20",
                            label: ["门店上新", "下饭"],
                        },
                        {
                            pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F2062a5b3-a52f-4b38-aaa4-1f94eb74238d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682816689&t=b19f5ca6b297b0e5c8400037b4462db4",
                            title: "酸菜鱼",
                            sales: "2888",
                            price: "20",
                            label: ["门店上新", "很下饭"],
                        },
                        {
                            pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F2062a5b3-a52f-4b38-aaa4-1f94eb74238d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682816689&t=b19f5ca6b297b0e5c8400037b4462db4",
                            title: "酸菜鱼",
                            sales: "2888",
                            price: "20",
                            label: ["门店上新", "很下饭"],
                        },
                    ],
                },
                {
                    tab: "7k7k",
                    data: [
                        {
                            pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F2062a5b3-a52f-4b38-aaa4-1f94eb74238d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682816689&t=b19f5ca6b297b0e5c8400037b4462db4",
                            title: "酸菜鱼",
                            sales: "2888",
                            price: "20",
                            label: ["门店上新", "很下饭"],
                        },
                    ],
                },
                {
                    tab: "5555",
                    data: [
                        {
                            pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F2062a5b3-a52f-4b38-aaa4-1f94eb74238d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682816689&t=b19f5ca6b297b0e5c8400037b4462db4",
                            title: "酸菜鱼",
                            sales: "2888",
                            price: "20",
                            label: ["门店上新", "很下饭"],
                        },
                        {
                            pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F2062a5b3-a52f-4b38-aaa4-1f94eb74238d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682816689&t=b19f5ca6b297b0e5c8400037b4462db4",
                            title: "酸菜鱼",
                            sales: "2888",
                            price: "20",
                            label: ["门店上新", "很下饭"],
                        },
                    ],
                },
                {
                    tab: "6666",
                    data: [
                        {
                            pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F2062a5b3-a52f-4b38-aaa4-1f94eb74238d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682816689&t=b19f5ca6b297b0e5c8400037b4462db4",
                            title: "酸菜鱼",
                            sales: "2888",
                            price: "20",
                            label: ["门店上新", "很下饭"],
                        },
                        {
                            pic: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F2062a5b3-a52f-4b38-aaa4-1f94eb74238d%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1682816689&t=b19f5ca6b297b0e5c8400037b4462db4",
                            title: "酸菜鱼",
                            sales: "2888",
                            price: "20",
                            label: ["门店上新", "下饭"],
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
    font-size: 12px;

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
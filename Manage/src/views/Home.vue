<template>
    <el-row>
        <el-col :span="8" style="padding-right:10px">
            <el-card class="box-card">
                <div class="headimg">
                    <img src="../assets/logo.png" alt="">
                    <div class="headimg-info">
                        <p class="name">Admin</p>
                        <p class="access">liuliu</p>
                    </div>
                </div>
                <div class="login-info">
                    <p>上次登录时间:<span>2022-08-22</span></p>
                    <p>上次登录地点:<span>火星</span></p>
                </div>
            </el-card>
            <el-card style="margin-top: 10px;height: 350px;">
                <el-table :data="dableData" style="width: 100%">
                    <!-- <el-table-column prop="name" label="课程">
                    </el-table-column>
                    <el-table-column prop="todayBuy" label="今日购买">
                    </el-table-column>
                    <el-table-column prop="monthBuy" label="本月购买">
                    </el-table-column>
                    <el-table-column prop="totalBuy" label="总购买">
                    </el-table-column> -->
                    <el-table-column v-for="(val, key) in tableLabel" :prop="key" :label="val">
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16" style="padding-left;:10px">
            <div class="num">
                <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
                    <div class="detail">
                        <p class="price">￥{{ item.value }}</p>
                        <p class="desc">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
            <el-card style="height:260px">
                <!-- 折线图 -->
                <div ref="echartsi" style="height: 240px;"></div>
            </el-card>
            <div class="graph">
                <el-card style="height:240px">
                    <div ref="echarts2" style="height: 220px;"></div>
                </el-card>
                <el-card style="height:240px">
                    <div ref="echarts3" style="height: 220px;"></div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>
<script>
import { getData } from '../api';
import * as echarts from 'echarts' //v5.0之后的版本引入方法
export default {
    data() {
        return {
            dableData: [
                // {
                //     name:'oppo',
                //     todayBuy:'100',
                //     monthBuy:'300',
                //     totalBuy:'800'
                // },
                // {
                //     name:'vivo',
                //     todayBuy:'100',
                //     monthBuy:'300',
                //     totalBuy:'800'
                // },
                // {
                //     name:'魅族',
                //     todayBuy:'100',
                //     monthBuy:'300',
                //     totalBuy:'800'
                // },
                // {
                //     name:'华为',
                //     todayBuy:'100',
                //     monthBuy:'300',
                //     totalBuy:'800'
                // },
                // {
                //     name:'小米',
                //     todayBuy:'100',
                //     monthBuy:'300',
                //     totalBuy:'800'
                // },
                // {
                //     name:'菠萝',
                //     todayBuy:'100',
                //     monthBuy:'300',
                //     totalBuy:'800'
                // },
            ],
            tableLabel: {
                name: '课程',
                todyBuy: '今日购买',
                mothBuy: '本月购买',
                totalBuy: '总购买'
            },
            countData: [
                {
                    name: '今日支付订单',
                    value: '1234',
                    icon: 'success',
                    color: '#2ec7c9',
                },
                {
                    name: '今日收藏订单',
                    value: '210',
                    icon: 'star-on',
                    color: '#ffb980',
                },
                {
                    name: '今日未支付订单',
                    value: '1234',
                    icon: 's-goods',
                    color: '#5ab1ef',
                },
                {
                    name: '本月支付订单',
                    value: '1234',
                    icon: 'success',
                    color: '#2ec7c9',
                },
                {
                    name: '本月收藏订单',
                    value: '210',
                    icon: 'star-on',
                    color: '#ffb980',
                },
                {
                    name: '本月未支付订单',
                    value: '1234',
                    icon: 's-goods',
                    color: '#5ab1ef',
                },
            ],
        }
    },
    mounted() {
        getData().then(({ data }) => {
            const { dableData } = data.data
            console.log(dableData)
            this.dableData = dableData

            // 基于准备好的dom，初始化echarts实例
            const echartsi = echarts.init(this.$refs.echartsi)
            // 指定图表的配置项和数据
            var echartsiOption = {}
            //处理数据xAxis
            const { orderData, userData, videoData } = data.data
            const xAxis = Object.keys(orderData.data[0])
            const xAxisData = {
                data: xAxis
            }
            echartsiOption.xAxis = { data: orderData.date }
            echartsiOption.yAxis = {}
            echartsiOption.legend = xAxisData
            echartsiOption.series = []
            xAxis.forEach(key => {
                echartsiOption.series.push({
                    name: key,
                    //map()方法创建一个新数组 这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成
                    data: orderData.data.map(item => item[key]),
                    type: 'line'
                })
            })
            console.log(echartsiOption)
            // 使用刚指定的配置项和数据显示图表。
            echartsi.setOption(echartsiOption)

            // 柱状图
            const echarts2 = echarts.init(this.$refs.echarts2)
            const echarts2Otion = {
                legend: {
                    // 图例文字颜色
                    textStyle: {
                        color: "#333",
                    },
                },
                grid: {
                    left: "20%",
                },
                // 提示框
                tooltip: {
                    trigger: "axis",
                },
                xAxis: {
                    type: "category", //类目轴
                    data: userData.map(item => item.date),
                    axisLine: {
                        lineStyle: {
                            color: "#17b3a3",
                        },
                    },
                    axisLabel: {
                        interval: 0,
                        color: "#333",
                    },
                },
                yAxis: [
                    {
                        type: "value",
                        axisLine: {
                            lineStyle: {
                                color: "#17b3a3",
                            },
                        },
                    },
                ],
                color: ["#2ec7c9", "#b6a2de"],
                series: [
                    {
                        name: '新增用户',
                        data: userData.map(item => item.new),
                        type: 'bar'
                    },
                    {
                        name: '活跃用户',
                        data: userData.map(item => item.active),
                        type: 'bar'
                    }
                ],
            }
            echarts2.setOption(echarts2Otion)

            // 饼状图
            const echarts3 = echarts.init(this.$refs.echarts3)
            const echarts3Otion = {
                tooltip: {
                    trigger: "item",
                },
                color: [
                    "#0f78f4",
                    "#dd536b",
                    "#9462e5",
                    "#a6a6a6",
                    "#e1bb22",
                    "#39c362",
                    "#3ed1cf",
                ],
                series: [
                    {
                        data: videoData,
                        type: 'pie'
                    }
                ],
            }
            echarts3.setOption(echarts3Otion)
        })
    }
}
</script>
<style lang="less" scoped>
.headimg {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;

    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin-right: 40px;
    }

    .headimg-info {
        .name {
            font-size: 32px;
            margin-bottom: 10px;
        }

        .access {
            color: rgb(127, 115, 100);
        }
    }
}

.login-info {
    p {
        line-height: 28px;
        font-size: 14px;
        color: #999999;

        span {
            color: #666666;
            margin-left: 60px;
        }
    }
}

.num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .icon {
        width: 50px;
        height: 50px;
        font-size: 24px;
        text-align: center;
        line-height: 50px;
        color: #fff;
    }

    .detail {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 15px;

        .price {
            font-size: 25px;
            margin-bottom: 10px;
            line-height: 20px;
            height: 20px;
        }

        .desc {
            font-size: 8px;
            color: #999;
            text-align: center;
        }
    }

    .el-card {
        width: 30%;
        margin-bottom: 10px;
    }
}

.graph {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    .el-card {
        width: 48%;
    }
}
</style>
<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <commoan-aside></commoan-aside>
            </el-aside>
            <el-container>
                <el-header>
                    <commoan-header></commoan-header>
                </el-header>
                <el-main>
                    <!-- 路由出口 -->
                    <!-- 路由匹配到的组件将渲染在这里 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import CommoanAside from '../components/CommoanAside.vue';
import CommoanHeader from '../components/CommoanHeader.vue';
export default {
    data() {
        return {};
    },
    components: { 
        CommoanAside,
        CommoanHeader,
    }
}
</script>
<style scoped>
.el-menu{
    border: 0;
}
.el-header{
    padding: 0;
}
</style>
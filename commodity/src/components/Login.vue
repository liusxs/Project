<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>后台管理系统</span>
            </div>
        </el-card>
        <el-form label-width="80px" :model="form" ref="form">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="活动形式">
                <el-button type="primary">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default{
    data(){
        return{
            form:{
                username: '',
                password:'',
            }
        };
    },
}
</script>
<style lang="less" scoped></style>
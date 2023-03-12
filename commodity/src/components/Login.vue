<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>后台管理系统</span>
            </div>
            <el-form label-width="80px" :model="form" ref="form">
                <el-form-item label="用户名" prop="username" :rules="[
                    //简单的校验规则
                    {require:true, message:'请输入用户名',trigger:'blur'},
                    {min: 4, max: 10,message:'用户名长度在4-10之间',trigger:'blur'},
                    ]">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password" :rules="[
                    //简单的校验规则
                    {require:true, message:'请输入用密码',trigger:'blur'},
                    {min: 6, max: 12,message:'用户名长度在6-12之间',trigger:'blur'},
                    ]">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login('form')">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<script>
import { Message } from 'element-ui';

export default {
    data() {
        return {
            form: {
                username: '',
                password: '',
            }
        };
    },
    methods:{
        login(from){
            this.$refs[from].validate((valid) => {
                if(valid){
                    console.log(this.form);
                    this.axios.post(this.HOST + 'https://rapserver.sunmi.com/app/mock/340/login',this.form)
                    .then(res => {
                        console.log(res)
                        if(res.data.status === 200){
                            localStorage.setItem('username',res.data.username)
                            this.$message({message: res.data.message, type: 'success'})
                            this.$router.push('/home')
                        }
                    })
                    .catch(err =>{
                        console.error(err)
                    })
                }else{
                    console.log(this.form);
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.login {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #409EFF;

    .box-card {
        width: 450px;
        margin: 200px auto;

        .el-button {
            width: 100%;
        }

        /* 
        /deep/样式穿插 分别还有
        css可以使用>>>，/deep/，::v-deep
        less和node-sass可以使用/deep/，::v-deep
        dart-sass可以使用::v-deep
        vue2.7以上版本以及包括vue3，应该使用:deep() 
        */
        /deep/.el-card__header {
            font-size: 34px;
            text-align: center;
        }
    }
}</style>
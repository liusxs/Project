<template>
    <div class="login">
        <Header title="登录" />
        <div class="img">登录</div>
        <van-form @submit="onSubmit">
            <van-field v-model="username" name="user" label="用户名" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]" />
            <div style="margin:16px">
                <van-button round block type="info" native-type="sumbit" color="#ffc400"> 登录</van-button>
                <van-button round block type="info" color="#ffc400" class="register" @click="toRegister"> 去注册</van-button>
            </div>
        </van-form>
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue';
import { showToast } from 'vant';
export default {
    components: {
        Header,
    },
    setup() {
        const router = useRouter()
        const onSubmit = (value) => {
            if (!localStorage.userInfo) {
                showToast('账号未注册');
                return;
            } else {
                let userInfo = JSON.parse(localStorage.userInfo)
                if (userInfo['user'] === value['user']) {
                    if (userInfo['password'] === value['password']) {
                        showToast('登录成功')
                        localStorage.setItem('isLogin', 'login')
                        router.push('/home')
                    } else {
                        showToast('密码错误')
                    }
                } else {
                    showToast('账号不存在');
                }
            }
        }
        const toRegister = () => {
            router.push('/register')
        }
        const data = reactive({
            username: '',
            password: '',
        })
        return {
            onSubmit,
            toRegister,
            ...toRefs(data)
        }
    }
}
</script>
<style lang="less" scoped>
.login {
    .img {
        width: 200px;
        height: 200px;
        background-color: #ffc400;
        font-size: 80px;
        line-height: 200px;
        text-align: center;
        border-radius: 40px;
        margin: 20px auto;
    }

    .register {
        margin-top: 20px;
    }
}
</style>
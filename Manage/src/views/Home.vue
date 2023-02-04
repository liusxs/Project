<template>
    <el-row>
        <el-col :span="8">
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
        </el-col>
        <el-col :span="16">
            <div class="grid-content bg-purple-light"></div>
        </el-col>
    </el-row>
</template>
<script>
export default {
    data() {
        return {}
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
</style>
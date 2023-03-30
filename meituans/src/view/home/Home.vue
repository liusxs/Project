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
                    <div class="big_sort"></div>
                    <div class="small_sort"></div>
                </div>
            </div>
           </div>
        </div>
    </div>
</template>
    
<script>

</script>
    
<style lang="less" scoped>
.header{
    background-image: linear-gradient(#ffc400,#fff);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px 40px 20px;
    .text{
        font-size: 20px;
        font-weight: 600;
    }
    .location{
        span{
            margin: 0 5px;
        }
        font-size: 14px;
    }
}
.main{
    margin-top: -30px;
    .main_bg{
        background-image: linear-gradient(#fff,#f5f5f5);
        padding: 10px 20px 0 20px;
        border-radius: 30px 30px 0 0;
        .search{
            position: relative;
            input{
                width: 100%;
                border: 1px solid #ffc400;
                border-radius: 20px;
                height: 30px;
            }
            .search-text{
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
    }
}
</style>    
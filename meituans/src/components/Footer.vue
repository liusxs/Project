<template>
    <div>
        <div>
            <router-link to="/home">
                <van-icon name="wap-home-o" />
                首页
            </router-link>
        </div>
        <div>
            <router-link to="/mine">
                <van-icon name="manager-o" />
                我的
            </router-link>
        </div>
        <div>
            <router-link to="/cart">
                <van-icon name="cart-o" />
                购物车
            </router-link>
        </div>
        <div>
            <router-link to="/order">
                <van-icon name="coupon-o" />
                订单
            </router-link>
        </div>
    </div>
</template>
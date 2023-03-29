module.exports = {
    //自动转换单位 px > rem
    "plugins": {
        'postcss-pxtorem': {
            rootValue: 16, // 此处表示设计稿尺寸
            propList: ['*']//（数组）可以从 px 更改为 rem 的属性  使用通配符*启用所有属性。例子：['*']
        }
    }
}
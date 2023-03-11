const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false ,// 关闭保存时校验!  eslint报错 原因：意思是组件命名不规范，组件的名称不是多单词组成的 
  //项目编译自动打开的配置
  devServer: {
    open: true,
    host: 'localhost'
  },
})

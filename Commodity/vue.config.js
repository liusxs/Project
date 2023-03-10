const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  //项目编译自动打开的配置
  devServer:{
    open:true,
    host:'localhost'
  }
})

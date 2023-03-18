const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,// 关闭保存时校验!  eslint报错 原因：意思是组件命名不规范，组件的名称不是多单词组成的 
  devServer: {
    //项目编译自动打开的配置
    open: true,
    host: 'localhost',
    proxy: {
      '/api': { // 请求的代称，写在Axios里的BaseUrl
        target: 'http://47.115.224.4:8080', // 真实请求URl
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})

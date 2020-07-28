const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

/* 
得到指定目录(必须在项目根目录下)的绝对路径 
*/
function resolve(dir) {
  return path.resolve(__dirname, dir)
}
module.exports = {
  // 模式: 生产环境
  // mode: 'production',

  // 入口
  entry: {
    xxx: resolve('src/index.js')
  },
  // 出口(打包生成js)
  output: {
    path: resolve('dist'), // 所有打包文件的基础路径 
    filename: 'js/[name].bundle.js',  // dist/js/xxx.bundle.js
  },

  // 模块加载器
  module: {
    rules: [

    ]
  },

  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html', // 以哪个页面为模板页面
      filename: 'index.html' // 打包生成的html文件名  ==> dist/index.html
    })
  ]
}
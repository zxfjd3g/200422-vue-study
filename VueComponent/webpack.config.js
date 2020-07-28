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
      // ES6-ED5
      {
        test: /\.js$/,
        //exclude: /node_modules/,
        include: resolve('src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'] 
          }
        }
      },

      // 处理css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // 多个loader从右到左处理
      },

      // 处理图片
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 1024*20, // 如果图片小于这个值, 就会进行图片BASE64处理
          name: 'img/[name].[ext]' // 相对于output.path
        }
      }
    ]
  },

  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html', // 以哪个页面为模板页面
      filename: 'index.html' // 打包生成的html文件名  ==> dist/index.html
    })
  ],

  // 配置开发服务器
  devServer: {
    open: true, // 自动打开浏览器
    port: 8080, // 指定启动服务器的端口号
    stats: 'errors-only', // 只输出错误日志
  },

  // 配置开启source-map调试  ==> 能定位到哪个源文件的哪一行
  devtool: 'cheap-module-eval-source-map',
}
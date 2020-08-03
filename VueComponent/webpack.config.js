const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

/* 
得到指定目录(必须在项目根目录下)的绝对路径 
*/
function resolve(dir) {
  return path.resolve(__dirname, dir)
}

const SRC_DIR = 'src' // 指定特定的src文件夹名称

module.exports = {
  
  // 模式: 生产环境
  // mode: 'production',

  // 入口
  entry: {
    // xxx: resolve(SRC_DIR + '/index.js')  
    xxx: ['@babel/polyfill', resolve(SRC_DIR + '/index.js')]
  },
  // 出口(打包生成js)
  output: {
    path: resolve('dist'), // 所有打包文件的基础路径 
    filename: 'js/[name].bundle.js',  // dist/js/xxx.bundle.js
    publicPath: '/', // 引入打包的文件时路径以/开头
  },

  // 模块加载器
  module: {
    rules: [
      // 处理vue文件
      {
        test: /\.vue$/,
        include: resolve(SRC_DIR), // 只对src下的vue文件处理
        loader: 'vue-loader'
      },

      // ES6-ED5
      {
        test: /\.js$/,
        //exclude: /node_modules/,
        include: resolve(SRC_DIR),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],  // 预设包
            plugins: [ // 预设包中不包含的插件包
              [
                "babel-plugin-component",  // 为babel-plugin-component配置
                {
                  "libraryName": "element-ui", // 针对element-ui实现组件的按需打包
                  "styleLibraryName": "theme-chalk" // 自动打包element-ui/lib/theme-chalk下的组件的样式
                }
              ]
            ] // 一旦我们需要一个另外babel插件, 需要在此配置
          }
        }
      },

      // 处理css
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader'], // 多个loader从右到左处理
        use: ['vue-style-loader', 'css-loader'], // vue-style-loader是对style-loader的增强
      },

      // 处理图片
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 1024*10, // 如果图片小于这个值, 就会进行图片BASE64处理 ==> 减少图片请求
          name: 'img/[name].[hash:8].[ext]' // 相对于output.path
        }
      },

      // 处理字体文件
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: 'fonts/[name].[hash:8].[ext]'
            }
          }
        ]
      },
    ]
  },

  // 插件
  plugins: [
    // 打包vue
    new VueLoaderPlugin(), // 处理Vue文件的插件
    // 打包html
    new HtmlWebpackPlugin({
      template: 'public/index.html', // 以哪个页面为模板页面
      filename: 'index.html' // 打包生成的html文件名  ==> dist/index.html
    }),

    // 拷贝指定文件(public下的)
    // 拷贝静态资源到打包文件夹
    new CopyWebpackPlugin([
      {
        from: resolve('public'),
        to: resolve('dist'),
        ignore: ['index.html']
      }
    ]),
  ],

  // 配置开发服务器
  devServer: {
    open: true, // 自动打开浏览器
    port: 8080, // 指定启动服务器的端口号
    stats: 'errors-only', // 只输出错误日志
    proxy: {
      /* 
      请求: /api/search/repositories2?q=v&sort=stars  
      本质: http:// localhost:8080/api/search/repositories2?q=v&sort=stars  
      服务器的接口: http://localhost:3000/search/repositories2

      使用: '/api': 'http://localhost:3000'
          转发到: http://localhost:3000/api/search/repositories2?q=v&sort=stars  
      使用: 带pathRewrite的配置
          转发到: http://localhost:3000/search/repositories2?q=v&sort=stars  
      
      */
     // 前缀路径在后台接口中路径中没有, 不可以
      // '/api': 'http://localhost:3000'
      '/api': { // 只代理转发以/api开头的请求
        target: 'http://localhost:3000',  // 转发的目标地址
        pathRewrite: {
          '^/api': ''  // 在转发请求时, 自动将开头的/api去掉 
        },
        changeOrigin: true, // 支持跨域, 如果协议/主机也不相同, 必须加上
      }
    },

    historyApiFallback: true, // 任意的 404 响应都被替代为 index.html
  },

  // 配置开启source-map调试  ==> 能定位到哪个源文件的哪一行
  devtool: 'cheap-module-eval-source-map',
  // devtool: 'source-map',
  // devtool: 'none',

  // 引入模块的解析
  resolve: {
    extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
    alias: { // 路径别名(简写方式)
      // import Vue from 'vue'  // 默认找vue vue.runtime.common.js  不带编译器的版本
      // 'vue$': 'vue/dist/vue.esm.js',  // 如果是引入'vue', 加载带编译的版本
      '@': resolve(SRC_DIR),
    }
  }
}
    
        
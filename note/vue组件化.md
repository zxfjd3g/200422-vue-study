## 模块与组件, 模块化与组件化
	模块: 提供特定功能的js文件
	组件: 实现一个局部界面功能的所有代码的集合(html/js/css/image)
	模块化: 项目中的js功能代码是多模块编写的, 那这个项目就是一个模块化的项目, 这种开发方式就是模块化的开发方式 
	组件化: 项目中的功能界面是多组件组合编写, 那这个项目就是一个组件化的项目, 这种开发方式就是组件化的开发方式 

## 定义使用Vue组件

### 原始方式
	定义并注册组件
		方法一: 
			Vue.component('组件标签名', 配置对象): 注册组件(内部会自动生成组件函数)
			1) 生成一个组件的构造函数VueComponent (调用Vue.extend()产生的)
			2) 以组件标签名为标识名称, 保存这个对应的组件构造函数  
			    ==> 用于解析组件标签时查找到对应的组件函数来创建其实例
			3) 返回组件函数  ==> 一般不用
		方式二
			Vue.extend(配置对象): 生成组件构造函数返回
			Vue.component('组件标签名', 组件构造函数)
	注册组件:
		局部
			components: { 
				'组件标签名': 配置对象/组件构造函数
			}
		全局: Vue.component('组件标签名', 配置对象/组件构造函数)

	组件标签
		一个组件标签就是一个组件函数的实例对象
		同名的多个组件标签就是一个组件函数的多个实例对象
	
	data配置 必须是一个函数
		一个组件的多个标签实例的data对象应该是独立的, 不能是共享的
		简单表达: 
			如果data配置对象: 直接通过.data得到对象(同一个)  ==> vue直接给你报错
			如果data配置函数: 通过调用data函数返回的data对象(不同的)  ==> 只能写函数的形式

	组件与Vue的关系:
		组件是Vue的"子类型"
		组件对象的原型对象的原型对象是Vue的原型对象 ==> 组件对象能访问Vue原型对象上的方法/属性
		// 生成组件构造函数的方法
		Vue.extend = function (extendOptions) {
		    var Super = this;
		    var Sub = function VueComponent () {
		    };
		    Sub.prototype = Object.create(Super.prototype);
			return Sub
		};

### 单文件组件
	一个vue组件就是一个.vue的文件
	需要下载一个vscode插件: Vetur
	单文件组件的特点:
		必须编译处理后才能运行  ==> 需要有一个webpack的打包环境 ==> 自定义的/脚手架生成的
		相对于原始方式的好处:
			提示补全 / 高亮
			可以写css样式
			可以进行编译预处理提高运行效率

## package.json的整体结构:
	{
		// 应用的标识
		// 名称
		"name": "vue-component",
		// 版本号
		"version": "1.0.0",
		
		// 打包/运行项目的脚本命令
		"scripts": {
		"build": "webpack"
		},
		
		// 运行时依赖包声明
		"dependencies": {
		
		},
		// 开发时(编译打包)依赖包声明
		"devDependencies": {
		
		}
	}

## 搭建基础的打包运行环境
	1). 下载依赖包
		webpack: webpack执行打包工作的核心包
		webpack-cli: 提供启动webpack操作的命令
		html-webpack-plugin: 在html自动引入打包生成的js/css
		webpack-dev-server: 只在内存中打包(不生成本地打包文件), 并启动服务器运行项目  live-reload/hot-reload
		babel-loader: 让webpack理解babel
		@babel/core: babel的核心包
		@babel/preset-env: 包含多个最常用的babel插件包的集合包 ==> babel的插件包: 用来解析某个具体的ES6语法
		css-loader@3.6.0: 将css文件打包到js中
		style-loader: 在运行能将js中的css转移到页面的<style>
		url-loader@2.3.0 file-loader@4.3.0: 打包图片(可能需要进行base64处理)/音频/视频/字体文件
    
    2). webpack的基本配置: webpack.config.js
		module.exports = {
			// 模式
			mode: 'development|production',
			// 入口: 指定入口js
			entry: {
				xxx: 'src/xxx.js'
			}
			// 出口: 指定打包文件的基础路径和具体文件名(带部分路径)
			output: {
				path: 'dist',
				filename: 'js/[name].bundle.js'
			}

			// 模块加载器
			module: {
				rules: [
					// 处理ES6转ES5的loader配置
					// 处理CSS的loader配置
					// 处理图片的loader配置
					{}
				]
			}

			// 插件
			plugins: [
				插件对象: new HtmlWebpackPlugin()
			]

			// 开发服务器
			devServer: {
				open: true, // 自动打开浏览器
				port: 8081, // 服务器启动的端口号
			}

			// 开发调试工具   sourcemap调试
			devtool: ''

			// 模块解析
			resolve: {
				extensions: ['.js', '.vue'], // 哪个模块文件扩展名可以省略
				alias: {
					'@': resolve('src'), // 模块路径别名  ==> 同时需要配置jsconfig.json(用于vscode能识别@提示)
				}
			}
		}

## 搭建Vue的开发环境
	下载包:
		vue
		vue-loader / vue-template-compiler
    配置处理.Vue组件文件的loader和plugin
    配置vue-style-loader替换style-loader
    解决无法编译template配置的错误
        原因: 默认引入的vue是不带编译器的版本, 无法对template配置指定模板进行编译
        解决: 
			方法1: 配置模块别名来指定引入vue带编译器的版本 ==> 打包文件较大
			方法2: 使用render配置  ==> 打包文件更小
    配置省略模块后缀名(.js/.vue/.json)

## 区分使用生产环境与开发环境
	使用生产环境:
	    npm run build   ==> webpack
	    1). 在内存中进行编译打包, 生成内存中的打包文件
	    2). 保存到本地(在本地生成打包文件)   ===> 此时还不能通过浏览器来访问, 需要启动服务器运行
	使用开发环境
	    npm run dev   ==> webpack-dev-server
	    1). 在内存中进行编译打包, 生成内存中的打包文件
	    2). 启动服务器, 运行内存中的打包文件(不生成本地打包文件)   ===> 可以通过浏览器虚拟路径访问

## vue单文件组件的结构
	<template>
      <div>xxx</div>
    </template>
    <script>
      export default {
        props: []/{}
        data(){},
        computed: {}
        methods: {},
        watch: {}
        filters: {}
        directives: {}
        components: {}
      }
    </script>
    <style scoped>  // 作用域样式, 限制css只能当前组件有效
    </style>

## 组件化编码的基本流程
	1). 拆分组件: 拆分界面, 抽取/定义组件
	2). 实现静态组件界面



## 编码任务列表
-1. 原始方式定义组件
-2. 组件的理解与data函数的问题
-3. 组件与Vue的关系理解
-4. 搭建webpack基本环境
-5. 打包JS-CSS-IMAGE
-6. 搭建vue打包环境,比较render与template
- 7. todos练习-拆分组件
- 8. 实现静态组件界面
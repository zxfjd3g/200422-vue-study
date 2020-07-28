## 模块与组件, 模块化与组件化
	模块: 提供特定功能的js文件
	组件: 实现一个局部界面功能的所有代码的集合(html/js/css/image)
	模块化: 项目中的js功能代码是多模块编写的, 那这个项目就是一个模块化的项目, 这种开发方式就是模块化的开发方式 
	组件化: 项目中的功能界面是多组件组合编写, 那这个项目就是一个组件化的项目, 这种开发方式就是组件化的开发方式 

## 定义使用Vue组件

### 原始方式
	


	// 生成组件构造函数的方法
	Vue.extend = function (extendOptions) {

	    var Super = this;
	
	    var Sub = function VueComponent (options) {
	      this._init(options);
	    };
	    Sub.prototype = Object.create(Super.prototype);
		return Sub
	};

### 单文件组件

## 编码任务列表
-1. 原始方式定义组件
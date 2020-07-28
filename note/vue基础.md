## vue基本认识/理解
	用于动态显示(构建)用户界面js框架/库
	声明式渲染与响应式数据(数据绑定): 
		不用我们亲自操作DOM界面就能初始化显示和更新显示
		我们需要做: 定义数据, 在页面特定位置声明要显示哪个数据 ==> 界面会初始动态显示, 更新数据==> 界面就会自动更新显示
	MVVM模式的实现
	插件: 
		情况1:　独立的: 就是基于原生的js/dom封装一些特定功能的程序代码  jquery/vue/react / axios
		情况2: xxx插件:  基于某个库封装的一个新的扩展库, jQueryUI/vue-router

## 理解MVVM
	M: model(模型): 为View提供数据的js对象, 也就是data对象
	V: View(视图): 模板页面
	VM: ViewModel(视图模型)   也就是vue的实例对象
		数据绑定(model-->view): 读data中数据动态显示, 一旦我们更新了data中的数据, 自动去更新界面
		事件监听(view-->model): 当我们在页面上输入新的数据, 可以自动将最新值自动保存到data中对应属性上
		v-model: 就是实现了双向数据绑定的一个指令
			input可以根据数据动态显示
			当改变输入时, 自动保存到data中

## 模板语法
	插值: <xxx>++++{{js表达式}}----</xxx>   标签体文本动态显示
	指令: <div v-xxx="js表达式"/>  操作所在的标签对象

	区别表达式与语句:
		表达式会返回一个数据值, 肯定没有分号, 它不是完整的js的解析指令, 需要与其它语法组成一条完整的语句
		语句是去做特定工作的去的, 他并不给你数据, 语句是完整js解析指令, 语句一般是带分号, 但js中可以省略

## 计算属性与监视
	1). 计算属性
	  在computed中定义计算属性方法根据已有的数据进行计算返回一个要显示的新数据
	  在页面中使用{{计算属性名}}来显示返回的数据
	  computed VS method: 内部有缓存, 多处读取只计算一次
	  计算属性默认相当于只有getter来根据已有数据计算返回一个新数据值, 也可以指定setter来监视我们主动修改当前计算属性值
	
	2). 监视/侦听器
	  通过watch配置或vm的$watch()来监视指定的属性值的变化
	  当属性变化时, 回调函数自动调用, 在函数内部进行特定处理
	  watch VS computed
	    如果是根据已有数据, 来动态同步确定一个新的数据值那一般都选择computed
	    watch可以做异步操作(如ajax请求)后才确定新的数据值
	    watch还有一个很大特点可以对数组或对象数据进行深度(deep)监视  ===> 后面练习用

## 确定回调函数的3个问题
	1). 什么时候执行?
	2). 用来做什么的?
	3). this是谁?         vue控制的回调函数this都是vm

## class与style的绑定
	什么时间使用? 当标签的class与style是动态的
	:class="xxx" 
		xxx是动态的字符串: 类名不确定
		xxx是对象: 类名确定, 只是不确定有没有
	:style="{color: activeColor, fontSize: fontSize + 'px'}" : 注意样式属性名-的处理

## 条件渲染
	通过v-if与v-show来控制
	区别:
		v-if: 通过删除DOM对象来隐藏, 
			不好: 重新显示时需要重新创建, 需要时间, 慢些, 
			好的: 隐藏时不占用着内存空间
    	v-show: 通过样式来隐藏
			好的: 重新显示时不需要, dom对象还在, 快些, 
			不好: 隐藏时还占用着内存空间
		如果是频繁切换, 一般用v-show相对更好些(现在内存空间相对比较大)

## 列表渲染
	使用v-for遍历数组或对象进行列表渲染
	响应式对象(数组): 修改了对象里面的数据, 界面就会自动更新, 比如user和persons
    vue内部会监视data中所有层次的属性数据
    1). 对象内部属性数据响应式(一旦修改了对象中的属性, 就会自动去更新界面)
      	通过Object.defineProperty()给对象中的所有属性都添加setter方法
    2). 数组中元素数据的响应式  ---数组更新检测
        不是通过Object.defineProperty()来实现
        vue内部重写了数组的改变元素的一系列方法  ===> 只是对data中的数组重写了
            1) 调用数组原始方法去更新数组元素
            2) 更新界面去
        vue内部重写了哪些数组的方法来实现数组内部元素的响应式
          push()
          pop()
          shift()
          unshift()
          splice()
          sort()
          reverse()
        我们可以假设数组中有一万个元素,如果使用defineProperty()需要定义1万个setter ===> 重写方法的效率高

	数组的原型对象也是数组   ==>一般函数的原型对象都是空的object实例对象

	更新响应式数据, 最终界面会自动更新
	但不是立即更新界面, 而在所有同步更新操作都执行完后才异步更新界面的

	响应式数据与非响应式数据
		响应式数据: data中的数据以及基于data的计算属性是响应式
		非响应式数据: 只存在于vm上的属性

## 事件处理
	1). 绑定监听:
	  v-on:xxx="fun"
	  @xxx="fun"
	  @xxx="fun(参数)"
	  默认事件形参: event
	  隐含属性对象: $event
	2). 事件修饰符:
	  .prevent : 阻止事件的默认行为 event.preventDefault()
	  .stop : 停止事件冒泡 event.stopPropagation()
	  .once: 事件响应一次
	3). 按键修饰符
	  .keycode : 操作的是某个keycode值的健
	  .enter : 操作的是enter键
	难点: 理解@xxx="fun('atguigu', $event)"
		Vue在外层自动包了一层函数定义, 作为点击监听的回调函数, $event就是接收事件对象的形参数变量
    	@click="($event) => test3('atguigu', $event)"

## 表单输入绑定
	使用v-model自动收集数据
	阻止表单提交:
		@click.prevent="regist"
		@submit.prevent="regist"

## vm生命周期
	生命周期勾子: 生命周期回调函数
	整个生命周期由3个大的阶段
		初始化显示
		更新显示
		死亡
	在vm整个生命周期的过程中的特定时刻, 会自动调用某个回调函数来通知你
	生命周期勾子:
		初始化: new Vue()
			beforeCreate(): vm对象一旦创建就立即调用, 此时通过vm得不到data中的数据
			---实现数据代理/数据绑定/事件初始化
			created(): 实现数据代理/数据绑定都已经准备好了, 此时通过vm得到data中的数据
			---解析模板: 在内存中生成DOM结构(已经解析好的)
			beforeMount():  在界面初始显示前调用, 此时还不能通过ref得到页面的标签对象
			---挂载到页面el中: 初始初始显示
			mounted(): 在界面初始显示后调用, 此时能通过ref得到页面的标签对象
					一般在此做一些一次性异步操作 ==> 比如: 启动定时器/发ajax请求/...
		更新: this.xxx = value
			beforeUpdate(): 在数据更新后, 界面更新前调用 ==> 取到的是老界面内容
			---更新界面
			updated(): 在数据更新且界面更新后调用 ==> 取到的是新界面内容 
		死亡: this.$destroy()
			beforeDestroy(): 在vm将要死亡之前自动调用, 一般在此执行一些收尾工作: 清除定时器/...
			destroyed(): 在死亡后自动调用
	开发中常用的
		created() / mounted(): 一般在此做一些一次性异步操作 ==> 比如: 启动定时器/发ajax请求/...
			created()执行稍微早一点点,差别不大, 但如果在发请求前需要读取初始页面那就只能用mounted()
		beforeDestroy(): 一般在此执行一些收尾工作: 清除定时器/...

## 过渡与动画
	1). vue动画的理解
		操作css的trasition或animation
		vue会给目标元素添加/移除特定的class
	2). 基本过渡动画的编码
		1). 在目标元素外包裹<transition name="xxx">
		2). 定义class样式
			1>. 指定过渡样式: transition
			2>. 指定隐藏时的样式: opacity/其它
	3). 过渡的类名
		xxx-enter-active: 指定显示的transition
		xxx-leave-active: 指定隐藏的transition
		xxx-enter: 指定隐藏时的样式

## 自定义过滤器
	1). 理解过滤器
	  功能: 对要显示的数据进行特定格式化后再显示
	  注意: 并没有改变原本的数据, 可是产生新的对应的数据
	2). 编码
	  1). 定义全局过滤器
	    Vue.filter(filterName, function(value[,arg1,arg2,...]){
	      // 进行一定的数据处理
	      return newValue
	    })
	  2). 使用过滤器
	    <div>{{myData | filterName}}</div>
	    <div>{{myData | filterName(arg)}}</div>

## 内置指令与自定义指令
	理解: 所有的指令都是用来操作所在的标签的
	内置指令: 
		v:text : 更新元素的 textContent/innerText
		v-html : 更新元素的 innerHTML
		v-if : 如果为true, 当前标签才会输出到页面
		v-else: 如果为false, 当前标签才会输出到页面
		v-show : 通过控制display样式来控制显示/隐藏
		v-for : 遍历数组/对象
		v-on : 绑定事件监听, 一般简写为@
		v-bind : 强制绑定解析表达式, 可以省略v-bind
		v-model : 双向数据绑定
		特殊属性-- ref : 为某个元素注册一个唯一标识, vue对象通过$refs属性访问这个元素对象
	自定义指令:
		1). 注册全局指令  ==> 所有vm都可以使用
		  Vue.directive('my-directive', function(el, binding){
		    el.innerHTML = binding.value.toupperCase()
		  })
		2). 注册局部指令 ==> 只有当前vm可以使用
		  directives : {
		    'my-directive' (el, binding) {
		      el.innerHTML = binding.value.toupperCase()
		    }
		  }
		3). 使用指令
		  v-my-directive='xxx'

## 自定义vue插件
	1) 所有vue插件必须都要有一个install方法, 在此方法中扩展vue的功能
	2) 引入vue的插件后, 必须通过Vue.use()来声明使用(安装)插件 => 内部会自动调用install来安装此插件

## 模块与组件, 模块化与组件化
	模块: 提供特定功能的js文件
	组件: 实现一个局部界面功能的所有代码的集合(html/js/css/image)
	模块化: 项目中的js功能代码是多模块编写的, 那这个项目就是一个模块化的项目, 这种开发方式就是模块化的开发方式 
	组件化: 项目中的功能界面是多组件组合编写, 那这个项目就是一个组件化的项目, 这种开发方式就是组件化的开发方式 
	



## 编码任务列表
- 1. vue helloworld
- 2. 理解MVVM, 数据绑定, 双向数据绑定
- 3. 模板语法
- 4. 计算属性VS方法
- 5. 监视VS计算属性
- 6. 计算属性的setter
- 7. 动态绑定class与style
- 8. 条件渲染
- 9. v-for显示列表
- 10. 理解vue响应式处理
- 11. 列表的搜索与排序
- 12. 绑定事件监听
- 13. 表单数据收集
- 14. 利用生命周期实现功能
- 15. 测试生命周期勾子
- 16. 过渡与动画
- 17. 自定义过滤器
- 18. 内置指令与自定义指令
- 19. 自定义vue插件
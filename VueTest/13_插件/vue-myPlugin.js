/* 
自定义的vue插件模块
*/
(function () {
  // 定义插件对象/函数
  const MyPlugin = {}

  // 插件必须要有一个install方法
  MyPlugin.install = function (Vue, options) {
    console.log('insall()')
    
    // 1. 添加全局方法或 property
    Vue.myGlobalMethod = function () {
      console.log('Vue.myGlobalMethod()')
    }
  
    // 2. 定义全局指令
    Vue.directive('my-directive', function (el, binding) {
      el.innerText = binding.value + '----'
    })
  
    // 4. 添加实例方法
    Vue.prototype.$myMethod = function () {
      console.log('vm..$myMethod()')
    }
  }

  // 暴露出来
  window.MyPlugin = MyPlugin
}) ()
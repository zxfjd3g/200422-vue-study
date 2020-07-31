import Vue from 'vue'
import App from '@/App.vue'
// import './base.css' // 可以作用于所有组件

// 创建一个vm对象作为全局事件总线对象
// 将其保存到Vue原型对象上 ==> 所有组件对象都可以看到这个总线对象
// Vue.prototype.$globalEventBus = new Vue()

const vm = new Vue({
  beforeCreate() { // 这个生命周期勾子最早执行
    Vue.prototype.$globalEventBus = this // 将当前vm作为全局事件总线对象保存到Vue原型对象上
  },
  render: h => h(App)
}).$mount('#root')

// Vue.prototype.$globalEventBus = vm  // 不可以, 太晚了

console.log('vm', vm)
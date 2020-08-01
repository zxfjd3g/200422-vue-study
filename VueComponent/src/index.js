import '@babel/polyfill' // 处理async&await Promise
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from '@/App.vue'

// 不显示当前不是生产环境打包的提示
Vue.config.productionTip = false

// 声明使用vue插件
Vue.use(VueResource) // 提供$http对象给所有的组件对象

new Vue({
  beforeCreate() {
    // 将当前vm作为事件总线对象保存到Vue原型对象上
    Vue.prototype.$eventBus = this
  },

  render: h => h(App)
}).$mount('#root')

import Vue from 'vue'
import VueResource from 'vue-resource'
import App from '@/App.vue'

// 不显示当前不是生产环境打包的提示
Vue.config.productionTip = false

// 声明使用vue插件
Vue.use(VueResource) // 提供$http对象给所有的组件对象

new Vue({
  render: h => h(App)
}).$mount('#root')

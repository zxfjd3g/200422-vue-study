import Vue from 'vue'
import App from '@/App.vue'
import router from './router'

// 不显示当前不是生产环境打包的提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, // 注册路由器
}).$mount('#root')

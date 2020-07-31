import Vue from 'vue'
import App from '@/App.vue'
// import './base.css' // 可以作用于所有组件

new Vue({
  render: h => h(App)
}).$mount('#root')

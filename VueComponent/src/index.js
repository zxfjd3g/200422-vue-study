import Vue from 'vue'
// import ElementUI from 'element-ui';  // 引入整个element-ui
// import 'element-ui/lib/theme-chalk/index.css'; // 引入整个element-ui的样式
import './elements'

import App from '@/App.vue'

// 不显示当前不是生产环境打包的提示
Vue.config.productionTip = false

// 声明使用vue的插件
// Vue.use(ElementUI);


new Vue({
  render: h => h(App)
}).$mount('#root')

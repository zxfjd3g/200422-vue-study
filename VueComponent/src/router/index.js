/* 
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/pages/About'
import Home from '@/pages/Home'

// 声明使用vue插件
Vue.use(VueRouter)

// 向外默认暴露路由器对象
export default new VueRouter({
  // 注册应用中的多个路由
  routes: [
    {  // 路由配置对象
      path: '/about',  // 左侧的/代表项目的根路径
      component: About
    },
    {
      path: '/home',
      component: Home
    },
  ]
})
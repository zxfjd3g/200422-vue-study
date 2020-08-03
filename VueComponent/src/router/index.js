/* 
路由器对象模块
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '@/pages/About'
import Home from '@/pages/Home'
import News from '@/pages/News'
import Message from '@/pages/Message'
import MessageDetail from '@/pages/MessageDetail'

// 声明使用vue插件
Vue.use(VueRouter)

// 向外默认暴露路由器对象
export default new VueRouter({
  mode: 'history',
  // mode: 'hash',

  // 注册应用中的多个路由
  routes: [
    {  // 路由配置对象
      path: '/about',  // 左侧的/代表项目的根路径
      component: About
    },
    {
      path: '/home',
      component: Home,

      children: [
        {
          path: '/home/news',
          component: News,
        },
        {
          // path: '/home/message', // 完整写法
          path: 'message', // 简写  注意左边没有/
          component: Message,
          children: [
            {
              name: 'Detail', // 给当前路由指定标识名称  ==> 通过对象的形式携带params参数
              // path: '/home/message/detail/:id', // 必须用:来指定params参数占位
              path: 'detail/:id', // 必须用:来指定params参数占位
              component: MessageDetail,
              // 将路由参数映射成props属性传递给路由组件
              // route: 就是当前路由信息对象, 也就是组件中的$route
              props: route => ({ // 返回的对象中的所有属性都自动传递给路由组件对象
                _id: route.params.id,
                _title: route.query.title
              })
            }
          ]
        },
        { // 自动重定向的路由  当请求/home时自动跳转到/home/news
          // path: '/home',
          path: '', // 相当于/home
          redirect: '/home/news'
        }
      ]
    },

    { // 自动跳转的路由
			path: '/', // 项目根路径
			redirect: '/about' // 自动转向到/about
		}
  ],

  linkActiveClass: 'my-active' // 配置当前路由链接的类名
})
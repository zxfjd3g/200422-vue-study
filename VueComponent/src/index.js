// import fn from './other'
// import logo from './assets/img/logo.png'
// import './assets/css/my.css'

// const image = new Image()
// image.src = logo
// document.body.appendChild(image)


// console.log('Hello Webpack!')
// document.getElementById('root').innerHTML = '<h1>Hello333333</h1>'
// fn()

import Vue from 'vue'
import App from './App' // 引入的App组件就是一个配置对象

console.log('App', App)

// 全局注册
// Vue.component('App', App)

new Vue({
  el: '#root',
  render: h => h(App),

  // 得到App组件对象, 渲染到el元素
  /* render: function (createElement) { 
    // 返回根据指定的组件来创建组件对象
    return createElement(App)
  } */

  // template: '<App></App>',
  // components: { // 局部注册
  //   App
  // }
})

/* 
一旦我定义了template配置, 就需要有vue的编译器进行编译, 但不会自动找vue-template-compiler来编译模板
当指定redner配置时, 它内部就会自动让vue-template-compiler去编译组件的模板
如果就要使用template配置, 引入的vue必须是一个带编译器的版本
  'vue$': 'vue/dist/vue.esm.js',  // 如果是引入'vue', 加载带编译的版本
比较:
  render + 不带编译器的vue: 打包文件更小
  template + 带编译器的vue: 打包文件更大
*/

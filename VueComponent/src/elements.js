/* 
element-ui的配置文件
注册组件
*/
import Vue from 'vue'
import {Button, Message} from 'element-ui'
// 注册全局组件
Vue.component(Button.name, Button)  // el-button
// 将Message组件函数挂载到vue原型对象上
Vue.prototype.$message = Message;

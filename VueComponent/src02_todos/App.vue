<template>

  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <!-- 通过标签属性传递数据 -->
      <List :todos="todos" :number="3" :deleteTodo="deleteTodo" :updateTodo="updateTodo"/>
      <Footer :todos="todos" :checkAllTodos="checkAllTodos" :clearCompleteTodos="clearCompleteTodos"/>
    </div>
  </div>
   
</template>

<script>
// 引入子组件
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import {readTodos, saveTodos} from './utils/localStorageUtils'
export default {
  name: 'App',

  data() {
    return {
      // 读取local中保存的todos数据作为初始值
      // 如果local中没有, 默认得到是null, 必须指定[]
      // todos: JSON.parse(window.localStorage.getItem('todos_key')) || []
      todos: readTodos()
    }
  },

  watch: {
    // 要监视它本身的变化, 以及它内部数据的任何变化
    todos: {
      deep: true, // 深度监视
      // handler: function (val, oldVal) { // 数据有变化
      //   // 将最新的todos保存到local中
      //   // window.localStorage.setItem('todos_key', JSON.stringify(val))
      //   saveTodos(val)
      // },
      handler: saveTodos    // 15K+
    }
  },

  test () {
    function fn (event) {
      alert(event.innerHTML)
    }
    div.onclick = fn
    div.onclick = function (event) {
      fn(event)
    }

    function fn2() {
      
    }
    var a = fn2

    const obj = {
      xxx (item, index) {
      
      }
    }

    [1, 2, 3].forEach(obj.xxx)
    [1, 2, 3].forEach((item, index) => {})

  },


  methods: { // 所有methods中的方法都会成功组件对象的方法
    /* 
    添加todo
    */
    addTodo (title) {
      // 创建一个新的todo对象
      const todo = {
        id: Date.now(),
        complete: false,
        title,
      }
      // 添加到todos的第一位
      this.todos.unshift(todo)
    },

    /* 
    删除todo
    */
    deleteTodo (index) {
      this.todos.splice(index, 1)
    },

    /* 
    更新todo(complete设置为true/false)
    */
    updateTodo (todo, isCheck) {
      console.log('updateTodo()')
      todo.complete = isCheck
    },

    /* 
    全选或全不选
    */
    checkAllTodos (isCheck) {
      this.todos.forEach(todo => todo.complete = isCheck)
    },

    /* 
    清除所有已完成的
    */
    clearCompleteTodos () {
      this.todos = this.todos.filter(todo => !todo.complete)
    }
  },

  // 局部注册
  components: {
    Header,
    List,
    Footer
  }
}
</script>

<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

<template>

  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"/>
      <!-- 通过标签属性传递数据 -->
      <List :todos="todos" :number="3" :deleteTodo="deleteTodo" :updateTodo="updateTodo"/>
      <Footer/>
    </div>
  </div>
   
</template>

<script>
// 引入子组件
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
export default {
  name: 'App',

  data() {
    return {
      todos: [
        {id: 1, title: 'A', complete: false},
        {id: 2, title: 'B', complete: true},
        {id: 3, title: 'C', complete: false}
      ]
    }
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

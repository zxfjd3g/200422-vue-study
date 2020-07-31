<template>
  <!-- 组件模板中读取的是当前组件对象的属性 -->
  <ul class="todo-main">
    <Item v-for="(todo, index) in todos" :key="todo.id" :todo="todo"
     :index="index"/>
  </ul>
</template>

<script>
import Item from './Item'
export default {
  name: 'List',

  // 声明接收属性: 指定要接收属性的属性名
  // 声明接收的所有标签属性都会成为当前组件对象的属性
  props: ['todos'],

  created() {
    console.log('+++', this.todos)
  },

  components: {
    Item
  }
}
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>

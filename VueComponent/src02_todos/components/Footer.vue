<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll"/>
    </label>
    <span>
      <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger" v-show="completeSize>0" 
      @click="clearCompleteTodos">清除已完成任务</button>
  </div>
</template>

<script>
/* 
是否选中全选 / 完成数量/总数量 / 是否显示删除按钮
全选/全不选
删除所有已完成
*/
export default {
  name: 'Footer',
  props: {
    todos: Array,
    checkAllTodos: Function,
    clearCompleteTodos: Function
  },

  computed: {

    /* 
    计算完成的数量
    */
    completeSize () {
      let size = 0
      this.todos.forEach(todo => {
        if (todo.complete) size++
      })
      return size

      // 也可以用array.reduce()
    },

    /* 
    是否勾选全选框
    */
    isCheckAll: {
      get () { // 是否全部完成了
        // return this.todos.every(todo => todo.complete) && this.todos.length>0
        return this.todos.length===this.completeSize && this.completeSize>0 // 不要加()调用, 只需要取值
      },

      set (value) { // value代表的就是勾选框的勾选状态值
        this.checkAllTodos(value)
      }
    }
  },
}
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>

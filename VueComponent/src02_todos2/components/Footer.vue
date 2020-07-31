<template>
  <div class="todo-footer">
    <label>
      <!-- <input type="checkbox" v-model="isCheckAll"/> -->
      <slot name="left"></slot> <!-- 命名插槽 -->
    </label>
    <!-- <span>
      <span>已完成{{completeSize}}</span> / 全部{{todos.length}}
    </span> -->
    <slot>abcd</slot>  <!-- 默认插槽 -->
    <!-- <button class="btn btn-danger" v-show="completeSize>0" 
      @click="clearCompleteTodos">清除已完成任务</button> -->
    <slot name="right"></slot> <!-- 命名插槽 -->
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

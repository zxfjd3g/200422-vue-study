<template>
  <li :style="{background: bgColor}" 
      @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <label>
      <input type="checkbox" v-model="isCheck"/>
      <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteItem">删除</button>
  </li>
</template>

<script>
  export default {
    name: 'Item',
    // 声明接收标签属性: 属性名/属性值类型
    // props: ['todo']
    props: {
      todo: Object,
      deleteTodo: Function,
      index: Number,
      updateTodo: Function
    },

    data() {
      return {
        bgColor: '#fff', // 背景颜色
        isShow: false, // 按钮是否显示
      }
    },

    computed: {
      isCheck: {
        // 是否勾选由todo的complete
        get () {
          return this.todo.complete
        },

        // 当前用户点击勾选框时自动调用
        set (value) { // value是当前选中的最新值true/false
          // 调用父组件传递过来的函数更新父组件数据
          this.updateTodo(this.todo, value)
          // this.todo.complete = value  // 不能直接这么做
        }
      }
    },

    methods: {
      /* 
      鼠标移入与移出的监听
      */
      handleEnter (isEnter) {
        if (isEnter) {
          this.bgColor = '#aaa'
          this.isShow = true
        } else {
          this.bgColor = '#fff'
          this.isShow = false
        }
      },

      /* 
      响应点击删除按钮
      */
      deleteItem () {
        if (window.confirm(`确定删除吗?`)) {
          // 删除todos中的当前todo
          this.deleteTodo(this.index)
        }
      }
    },
  }
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
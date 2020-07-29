<template>
  <div class="todo-header">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认"
      v-model.trim="title" @keyup.enter="add"/>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: { // 声明接收标签属性: 属性名/属性值的类型/必要性
    // addTodo: Function
    addTodo: { // 会成为组件对象的方法
      type: Function, // 值是函数
      required: true  // 必须传入
    }
  },

  data() {
    return {
      title: '',
    }
  },

  methods: { // 
    // 接收的属性不能与method同名
    // addTodo () {  // 也会成为组件对象的方法, 与props接收的同名冲突(覆盖)

    // }

    // 添加todo
    add () {
      // 得到输入的title
      // const title = this.title.trim()
      const {title} = this
      // console.log('---' + title + '-----')
      // 如果没有输入, 直接结束不添加
      if (title==='') return

      // 调用addTodo向todos中添加todo
      this.addTodo(title)
      // 清除输入
      this.title = ''
    }
  },
}
</script>

<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>

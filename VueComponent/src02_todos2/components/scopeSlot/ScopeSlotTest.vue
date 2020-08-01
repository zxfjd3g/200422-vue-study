<template>
  <div>
    <h2>效果一: 显示TODO列表时, 已完成的TODO为绿色</h2>
    <TodoList :data="todos">
      <!-- 
        决定传递什么样结构内容的数据在子组件
        父组件取到子组件传递过来数据, 从而决定向子组件传递什么样的结构内容
        slot-scope: 指定接收子组件中<slot>传递过来的所有属性的对象
          scope的结构: {row: todo对象, index: 下标}
       -->
       <template slot-scope="{row, $index}">
         <span v-if="row.isComplete" style="color: green">{{row.text}}</span>
         <span v-else>{{row.text}}</span>
       </template>
      
    </TodoList>
    <hr>

    <h2>效果二: 显示TODO列表时, 带序号, TODO的颜色为蓝绿搭配</h2>
    <TodoList :data="todos2">
      <template slot-scope="xxx">
        <span :style="{color: xxx.$index%2==0?'blue':'green'}">{{xxx.$index + 1}}--{{xxx.row.text}}</span>
      </template>
    </TodoList>
  </div>
</template>

<script>
  import TodoList from './TodoList'
  export default {
    name: 'ScopeSlotTest',
    data () {
      return {
        todos: [
          {id: 1, text: 'AAA', isComplete: false},
          {id: 2, text: 'BBB', isComplete: true},
          {id: 3, text: 'CCC', isComplete: false},
          {id: 4, text: 'DDD', isComplete: true},
        ],

        todos2: [
          {id: 1, text: 'AAA22', isComplete: false},
          {id: 2, text: 'BBB22', isComplete: true},
          {id: 3, text: 'CCC22', isComplete: true},
          {id: 4, text: 'DDD22', isComplete: false},
        ]
      }
    },

    components: {
      TodoList
    }
  }
</script>

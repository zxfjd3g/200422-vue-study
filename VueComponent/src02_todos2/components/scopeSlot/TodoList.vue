<template>
  <ul>
    <li v-for="(item, index) in data" :key="index">
      <!-- 
        由使用的父组件来定义每一项的结构内容
        子组件需要将数据传递给父组件 ==> 所有<slot>上的所有属性都会自动传递给父组件
       -->
      <slot :row="item" :$index="index"></slot>  
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    data: Array
  }
}
</script>
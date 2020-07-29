<template>
  <div>
    <h2>{{title}}</h2>
    <hr>
    <test/>
  </div>
</template>

<script>
import test from './components/test' // 引入组件
export default { // 默认暴露配置对象
  data() {
    console.log('===')
    return {
      title: 'App 组件标题'
    }
  },

  components: { // 局部注册
    test
  }
}
</script>

<style scoped>
</style>

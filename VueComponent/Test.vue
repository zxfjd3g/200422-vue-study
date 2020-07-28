<template>
  <div>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
export default { // 默认暴露配置对象
  data() {
    return {
      title: 'Test 组件标题'
    }
  },
}
</script>

<style>
  h2 {
    color: red;
  }
</style>

<template>
  <div>
    <h2>Test组件标题</h2>
  </div>
</template>

<script>
export default {
  name: '',
}
</script>

/* scoped: 作用域样式, 当前css样式就不会影响到其它所有的组件 */
<style scoped>
  h2 {
    color: red;
  }
</style>


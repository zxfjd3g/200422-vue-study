<template>
  <div>
    <!-- 显示路由链接 -->
    <router-link to="/about">About</router-link>
    <router-link to="/home">Home</router-link>

    <hr>
    <!-- 显示当前路由组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style scoped>

</style>
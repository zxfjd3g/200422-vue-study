<template>
  <div>
    <h2>About</h2>
    <h3>msg: {{msg}}</h3>
    <input type="text">
  </div>
</template>

<script>
export default {
  name: 'About',
  props: ['msg'],
  mounted() {
    console.log('About mounted()')
  },
  beforeDestroy() {
    console.log('About 将要死亡')
  },
}
</script>

<style scoped>

</style>

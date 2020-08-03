<template>
  <div>About</div>
</template>

<script>
export default {
  // name: 'About',
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

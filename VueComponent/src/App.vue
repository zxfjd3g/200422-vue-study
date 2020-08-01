<template>
  <div class="container">
   <Search/>
   <Main/>
  </div>
</template>

<script>
  import Search from './components/Search'
  import Main from './components/Main'
  export default {
    name: 'App',

    components: {
      Search,
      Main
    }
  }
</script>

<style scoped>

</style>
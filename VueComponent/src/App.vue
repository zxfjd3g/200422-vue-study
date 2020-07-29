<template>
  <div>
    <Header/>
    <List/>
    <Footer/>
  </div>
</template>

<script>
// 引入子组件
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
export default {
  name: 'App',

  // 局部注册
  components: {
    Header,
    List,
    Footer
  }
}
</script>

<style scoped>

</style>

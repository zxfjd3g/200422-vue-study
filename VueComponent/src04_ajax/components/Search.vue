<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model.trim="searchName"/>
      <button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Search',

  data() {
    return {
      searchName: ''
    }
  },

  methods: {
    search () {
      // 如果有输入数据, 通知Main组件进行搜索
      if (this.searchName) {
        this.$eventBus.$emit('search', this.searchName)   // 触发监听回调执行
        console.log('$emit()之后')

        /* 
        $emit()之后  ==> 处理事件的回调执行了   ===> 说明监听的回调是异步执行
        处理事件的回调执行了 ==> $emit()之后    ===> 说明监听的回调是同步执行
        */

       const arr = [1, 2, 3]
       arr.forEach(item => console.log(item))  
       console.log('forEach()之后')
       // 触发的回调函数执行完后外面的函数才执行完 ===> 回调函数是同步执行的
       // 触发的回调函数还没执行, 外面函数就执行完, 回调函数在将来的某个时间执行 ===>  回调函数是异步执行的
       setTimeout(() => {
         console.log('======')
       }, 0);
       console.log('setTimeout()之后')


       new Promise((resolve, reject) => { // 执行器函数是同步还是异步?
          console.log('======')
       })
       console.log('+++')

       Promise.resolve(1).then(value => {
         console.log('-----')
       })
       console.log('++++')

       

        // 清除输入
        this.searchName = ''
      }
    }
  },
}
</script>

<style scoped>

</style>

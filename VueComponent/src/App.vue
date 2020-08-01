<template>
  <div>
    <p v-if="repoName">
      most star repo is 
      <a :href="repoUrl">{{repoName}}</a>
    </p>
    <p v-else>LOADING....</p>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'App',

    data() {
      return {
        repoName: '', // 仓库名称
        repoUrl: '', // 仓库地址
      }
    },

    created() {
      // 使用vue-resource发ajax请求获取数据
      // const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
      // this.$http.get(url).then(response => {
      //   // 成功后, 取出相应数据, 更新数据更新显示
      //   const result = response.data
      //   const {name, html_url} = result.items[0]
      //   this.repoName = name
      //   this.repoUrl = html_url
      // }).catch(error => {
      //     // 提示
      //     alert('请求出错!')
      // })

      // 使用axios发ajax请求获取数据
      // axios.get('https://api.github.com/search/repositories?q=v&sort=stars').then(response => {
         // ajax请求也跨域, github服务器做了cors处理允许跨域
      // axios.get('https://api.github.com/search/repositories?q=v&sort=stars', {
      
      /* 
      ajax请求跨域了, 后台没有处理, 出错
      开发中用得最多的方式: 使用代理解决跨域
      */
      axios.get('/api/search/repositories2', { 
        params: { // 指定query参数
          q: 'r',
          sort: 'stars'
        }
      }).then(response => {
        // 成功后, 取出相应数据, 更新数据更新显示
        const result = response.data
        const {name, html_url} = result.items[0]
        this.repoName = name
        this.repoUrl = html_url
      }).catch(error => {
          // 提示
          alert('请求出错222!')
      })
    },

  }
</script>

<style scoped>

</style>
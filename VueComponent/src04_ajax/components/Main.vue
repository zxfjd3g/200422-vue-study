<template>
  <div>
    <h2 v-if="firstView">输入名称进行搜索</h2>
    <h2 v-else-if="loading">正在请求加载中...</h2>
    <h2 v-else-if="errorMsg">{{errorMsg}}</h2>
    <div class="row" v-else>
      <div class="card" v-for="user in users" :key="user.id">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Main',

  data() {
    return {
      firstView: true, // 是否显示第一个界面
      loading: false, // 是否正在请求加载中
      users: [], // 请求得到的所有用户的数组
      errorMsg: '', // 需要显示的请求错误信息
    }
  },

  mounted() {
    // 通过事件总线绑定search事件监听
    this.$eventBus.$on('search', async (searchName) => { // 一旦调用说明点击了搜索
      console.log('处理事件的回调执行了')
      // 更新数据(请求中)
      this.firstView = false
      this.loading = true

      // 发ajax请求获取用户列表
      // axios.get('https://api.github.com/search/users', {
      // axios.get('/api/search/users2', {
      //   params: {
      //     q: searchName
      //   }
      // }).then(response => { // 成功了, 更新数据(成功)
      //   const result = response.data

      //   // 从响应数据中取出users  , user的结构为: {id, avatar_url, name, url}
      //   const items = result.items // users中的user结构为 {id, avatar_url, login, html_url, ...} 
      //   const users = items.map(item => ({
      //     id: item.id, 
      //     avatar_url: item.avatar_url, 
      //     name: item.login, 
      //     url: item.html_url
      //   }))
      //   // 更新数据
      //   this.loading = false
      //   this.users = users
      // }).catch(error => { // 失败了, 更新数据(失败)
      //    this.loading = false
      //    this.errorMsg = error.message || '未知错误'
      // })


      /* 
      使用async&await来简化promise的使用
      不用再使用.then()来指定成功或失败的回调来得到异步成功或失败的结果数据
      使用await: 在结果为promise的表达式左侧使用
      使用async: await所在函数定义的左侧使用
      */
      try {
        const response = await axios.get('/api/search/users2', {
          params: {
            q: searchName
          }
        })
        // 成功了, 更新数据(成功)
        const result = response.data
        // 从响应数据中取出users  , user的结构为: {id, avatar_url, name, url}
        const items = result.items // users中的user结构为 {id, avatar_url, login, html_url, ...} 
        const users = items.map(item => ({
          id: item.id, 
          avatar_url: item.avatar_url, 
          name: item.login, 
          url: item.html_url
        }))
        // 更新数据
        this.loading = false
        this.users = users
      } catch (error) { // 失败了, 更新数据(失败)
         this.loading = false
         this.errorMsg = error.message || '未知错误'
      }
      
    })
  },
}
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>

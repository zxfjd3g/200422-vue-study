<template>
 <div>
    <ul>
      <li v-for="m in messages" :key="m.id">
        <router-link :to="`/home/message/detail/${m.id}?id2=${m.id}&title=${m.title}`">
          {{m.title}}
        </router-link>
        --<button @click="pushShow(m.id)">push查看</button>
        --<button @click="replaceShow(m.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <button @click="$router.forward()">前进</button>
    <hr>
    <router-view></router-view>
 </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'Message',

  data () {
    return {
      messages: []
    }
  },

  mounted() {
    // 模拟请求获取消息列表数据
    setTimeout(() => {
      const messages = [
        {id: 1, title: 'message001'},
        {id: 2, title: 'message002'},
        {id: 4, title: 'message004'},
      ]
      this.messages = messages
    }, 1000);
  },

  methods: {
    // 查看指定id的详情  push
    pushShow (id2) {
      // location是字符串
      // this.$router.push(`/home/message/detail/${id2}`)

      // location是个对象
      this.$router.push({
        // path: '/home/message/detail',
        name: 'Detail',
        params: {
          id: id2  // 属性名要与路由配置的:后面的名称要一致
        },
        query: {
          title: 'abc'
        }
      })

    },

    // 查看指定id的详情 replace
    replaceShow (id) {
      // this.$router.replace(`/home/message/detail/${id}`)
      router.replace(`/home/message/detail/${id}`)
    }
  },
}
</script>

<style scoped>

</style>

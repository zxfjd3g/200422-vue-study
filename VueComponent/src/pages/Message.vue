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
    pushShow (id) {
      this.$router.push(`/home/message/detail/${id}`)
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

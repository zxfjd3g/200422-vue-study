<template>
  <ul>
    <li>参数映射的props: {{_id}}---{{_title}}</li>
    <li>query参数: id2={{$route.query.id2}}, title={{$route.query.title}}</li>
    <li>id: {{$route.params.id}}</li>
    <li>title: {{detail.title}}</li>
    <li>content: {{detail.content}}</li>
  </ul>
</template>

<script>
const allDetails = [
  {id: 1, title: 'message001', content: 'message content001'},
  {id: 2, title: 'message002', content: 'message content002'},
  {id: 4, title: 'message004', content: 'message content004'},
]
export default {
  name: 'MessageDetail',

  props: ['_id', '_title'],

  data() {
    return {
      detail: {}
    }
  },

  /* 
  在当前路由组件路径上, 再次请求当前路由路径, 只是参数变化(路径没有变化) 
          ==> 路由组件是缓存复用的(不会重新创建)
  从路由A跳转到路由B: A会死亡, B创建, 从B跳转回A: B死亡, A创建
  从路由A跳转到路由A: 路由组件是复用(缓存)的 ==> 不会重新执行mounted()
  */
  mounted() {
    console.log('mounted()')
    // 得到id参数
    const id = this.$route.params.id * 1

    // 模拟异步请求获取对应的详情对象
    this.getDetail(id)
  },

  /* 
  问题: 由于mounted只执行了一次, 导致参数变化时不会再发请求获取数据显示
  解决: 监视参数数据的变化, 一旦发现变化, 重新请求获取
  */
  watch: { // 监视$route==> 就是监视参数数据的变化
    $route(to, from) { // 当只是参数发生变化自动调用
      console.log('watch $route')
      // 得到id参数
      const id = to.params.id * 1
      this.getDetail(id)     
    }
  },

  methods: {
    /* 
    根据id异步获取详情显示
    */
    getDetail (id) {
       // 模拟异步请求获取对应的详情对象
      setTimeout(() => {
        // 查询得到对应的detail
        const detail = allDetails.find(detail => detail.id===id)
        // 更新数据
        this.detail = detail

      }, 1000);
    }
  },
}
</script>

<style scoped>

</style>

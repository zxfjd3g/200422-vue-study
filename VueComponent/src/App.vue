<template>
  <div>
    <el-button type="primary" @click="handleClick1">主要按钮</el-button>
    <el-button type="danger" @click="handleClick2">危险按钮</el-button>
  </div>
</template>

<script>
  export default {
    name: 'App',

    methods: {
      handleClick1 () {
        // this.$message({
        //   message: '恭喜你，这是一条成功消息',
        //   type: 'success'
        // });
        this.$message.success('恭喜你，这是一条成功消息')
      },

      handleClick2 () {
        // this.$message({
        //   message: '请求出错啦',
        //   type: 'error'
        // });
        this.$message.error('请求出错啦')
      }
    },
  }
</script>

<style scoped>

</style>
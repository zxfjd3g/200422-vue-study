<template>
  <div class="col-md-4" >
    <form class="form-horizontal"> <!-- @submit.prevent="add" -->
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" placeholder="用户名" v-model.trim="username">
      </div>
      <div class="form-group">
        <label>评论内容</label>
        <textarea class="form-control" rows="6" placeholder="评论内容" v-model.trim="content"></textarea>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <!-- <button type="button" class="btn btn-default pull-right" @click="add">提交</button> -->
          <!-- 
            默认是提交按钮, 点击会提交表单, 需要用.prevent来阻止 
            当指定type="button"是一个一般按钮, 点击一般按钮不提交表单 -->
          <button class="btn btn-default pull-right" @click.prevent="add">提交</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  // name: 'CommentAdd2',

  props: {
    addComment: Function
  },

  data() {
    return {
      username: '', // 用户名
      content: '', // 评论内容
    }
  },

  methods: {
    // 根据输入添加一个新的评论
    add () {

      // 取出收集的数据
      const {username, content} = this

      // 如果没有输入, 提示并结束
      if (username==='') {
        alert('用户名必须指定')
        return
      }
      if (!content) {
        alert('内容必须指定')
        return
      }

      // 调用 addComment函数来添加
      this.addComment(username, content)

      // 清除输入
      this.username = ''
      this.content = ''

    }
  },
}
</script>

<style scoped>

</style>

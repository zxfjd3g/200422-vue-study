<template>
  <!-- 模板读取都是组件对象的属性 -->
  <!-- 方法与属性? -->
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-if="CommentArr.length===0">暂无评论，点击左侧添加评论！！！</h2>
    <ul v-else class="list-group">
     <CommentItem v-for="(comment, index) in CommentArr" :key="comment.id"
      :comment="comment" :index="index" :deleteComment="deleteComment"/> 
    </ul>
  </div>
</template>

<script>
  import CommentItem from './CommentItem'
  export default {
    name: 'CommentList',
    // 声明接收
    props: {  // 声明接收到的所有标签属性都会自动成功当前组件对象的属性
      CommentArr: Array,
      deleteComment: Function
    },

    components: {
      CommentItem
    }
  }
</script>

<style scoped>
.reply {
  margin-top: 0px;
}
</style>
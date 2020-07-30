<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 v-if="commentArr.length===0">暂无评论，点击左侧添加评论！！！</h2>
    <ul v-else class="list-group">
      <CommentItem v-for="(comment, index) in commentArr" :key="comment.id" 
        :comment="comment" :index="index" :deleteComment="deleteComment"/>
    </ul>
  </div>
</template>

<script>
import CommentItem from './CommentItem'
export default {
  name: 'CommentList',

  props: {
    commentArr: Array,
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

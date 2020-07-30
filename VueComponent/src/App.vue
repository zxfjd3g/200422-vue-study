<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <CommentAdd :addComment="addComment"/>
      <CommentList :commentArr="commentArr" :deleteComment="deleteComment"/>
    </div>
  </div>
</template>

<script>
import CommentAdd from '@/components/CommentAdd'
import CommentList from '@/components/CommentList'
export default {
  name: 'App',
  
  data() {
    this.id = 4

    return {
      commentArr: [
        {id: 1, username: 'Tom', content: 'Vue好难啊'},
        {id: 2, username: 'Jack', content: 'Vue so easy'},
        {id: 3, username: 'Bob', content: 'Vue难不难, 学完了才知道'},
      ]
    }
  },

  methods: {
    deleteComment (index) {
      this.commentArr.splice(index, 1)
    },
    
    addComment (username, content) {
      const comment = {
        id: this.id++,
        username,
        content
      }

      this.commentArr.unshift(comment)
    }
  },

  components: {
    CommentAdd,
    CommentList
  }
}
</script>

<style scoped>

</style>

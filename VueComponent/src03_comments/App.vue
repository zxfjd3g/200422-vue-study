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
      <Comment-add :addComment="addComment"/>
      <!-- <CommentAdd :addComment="addComment"/> -->
      <CommentList :comment-arr="commentArr" :deleteComment="deleteComment"/>
      <!-- <CommentList :commentArr="commentArr" :deleteComment="deleteComment"/> -->
    </div>
  </div>
</template>

<script>
  import CommentList from '@/components/CommentList'
  import CommentAdd from '@/components/CommentAdd'
  export default {
    name: 'App',

    data() {
      // 给组件对象添加一个id属性
      this.id = 4  // 它不是响应式的(没有必要放在data对象中, 因为界面不需要根据它来动态显示)
      return {
        commentArr: [
          {id: 1, username:'tom', content: 'Vue很难'},
          {id: 2, username:'Jack', content: 'Vue so easy'},
          {id: 3, username:'Bob', content: 'Vue难不难, 学了才知道'},
        ]
      }
    },

    methods: {
      /* 
      添加一个新的评论
      */
      addComment (username, content) {
        // const id = this.id
        // this.id = id + 1
        // 创建一个评论对象
        const comment = {
          // id: this.commentArr.length+1,  // 删除后可能会重复
          // id,
          id: this.id++,
          username,
          content
        }
        // 添加到数组中
        this.commentArr.unshift(comment)
      },

      /* 
      删除指定comment
      */
      deleteComment (index) {
        this.commentArr.splice(index, 1)
      }
    },

    components: {
      'CommentAdd': CommentAdd,
      CommentList
    }
  }
</script>

<style scoped>

</style>
<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post" />
  </div>
</template>

<script>
import axios from 'axios'
import post from '@/components/Blog/Post.vue' // принимаем Posr.vue
export default {
  components: { post }, // регистрируем
  async asyncData(context) {
    let [post] = await Promise.all([
      axios.get(`https://blog-a4098-default-rtdb.firebaseio.com/posts/${context.params.id}.json`)
    ])
    return {
      post: post.data
    }
  }
}
</script>

<style lang="scss">
.post {
  max-width: 900px;
  margin: 0 auto;
}
.post-header {
  text-align: center;
  margin-bottom: 30px;
  img {
    max-width: 400px;
    margin-bottom: 16px;
    border-radius: 5px;
  }
  p {
    color: black
  }
}
.post-body {
  text-align: end;
}
</style>

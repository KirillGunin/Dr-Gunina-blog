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
  head() { // head понимает контекст поэтому используем this а asyncData не понимает
    let title = this.post.title,
        content = this.post.content,
        img = this.post.img, // будет показывать картинку в социальных сетях когда ссылкой поделятся
        type = 'article'

    return {
      title: title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: content },
        { hid: 'og:description', name: 'og:description', content: content },
        { hid: 'og:type', name: 'og:type', content: type },
        { hid: 'og:img', name: 'og:img', content: img },

      ]
    }
  },
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

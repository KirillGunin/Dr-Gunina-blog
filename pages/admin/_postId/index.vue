<!-- это файл редактирования -->
<template>
  <newPostForm
  :postEdit="post"
  @submit="onSubmit"/>
</template>

<script>
import axios from 'axios'
import newPostForm from '@/components/Admin/NewPostForm.vue'
export default {
  components: { newPostForm },
  layout: 'admin',
   asyncData(context) { // эту дату используем в nuxt.js
    return axios.get(`https://blog-a4098-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`)
      .then(res => {
        return {
          post: {...res.data, id: context.params.postId}
        }
      })
    .catch(error => context.error(error))
  },
  methods: {
    onSubmit(post) {
      console.log('Post Editing')
      this.$store.dispatch('editPost', post)
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>

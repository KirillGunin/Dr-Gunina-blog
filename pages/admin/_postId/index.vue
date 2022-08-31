<!-- это файл редактирования -->
<template>
  <editPostForm
  :postEdit="post"
  @submit="onSubmit"
  @click="deletePost" />
</template>

<script>
import axios from 'axios'
import editPostForm from '@/components/Admin/EditPostForm.vue'
export default {
  components: { editPostForm },
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
    },
    deletePost(post) {
      console.log('Post delete')
      this.$store.dispatch('deletePost', post)
      .then(() => {
        this.$router.push('/admin')
      })
    }
  }
}
</script>

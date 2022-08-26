<template>
  <newPostForm @submit="onSubmit"/>
</template>

<script>
import newPostForm from '@/components/Admin/NewPostForm.vue'
export default {
  components: { newPostForm },
  layout: 'admin',
  methods: {
    onSubmit(post) {
      // console.log('Post added')
      // console.log(post)
      this.$store.dispatch('addPost', post) // обратимся к action в store/index.js
        .then(() => {
          this.$router.push('/admin') // в случае успеха пушим на /admin
        })
    }
  }
}
</script>

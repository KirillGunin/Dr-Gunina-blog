<template>
  <newPostForm @submit="onSubmit"/>
</template>

<script>
import newPostForm from '@/components/Admin/NewPostForm.vue'
export default {
  components: { newPostForm },
  head() {
    let title = 'Личный кабинет',
        content = '',
        type = 'site'

    return {
      title: title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: content },
        { hid: 'og:description', name: 'og:description', content: content },
        { hid: 'og:type', name: 'og:type', content: type },
      ]
    }
  },
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

<template>
  <!-- posts -->
  <PostsList :admin=true :posts="postsLoaded" />
</template>

<script>
export default {
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
  mounted() {
    this.$store.dispatch('nuxtServerInit')
  },
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded // подгружает из бд
    }
  }
}
</script>

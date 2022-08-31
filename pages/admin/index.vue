<template>
  <!-- posts -->
  <PostsList :admin=true :posts="postsLoaded" />
</template>

<script>
export default {
  layout: 'admin',
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded // подгружает из бд
    }
  }
}
</script>

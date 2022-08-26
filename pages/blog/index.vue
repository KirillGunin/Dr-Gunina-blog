<template>

  <div class="wrapper-content wrapper-content--fixed">
    <Intro
      class="intro"
      title="My posts:" />

    <!-- posts -->
    <PostsList :posts="postsLoaded" />

  </div>

</template>

<script>

export default {
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded // подгружает из бд
    }
  }
}
</script>

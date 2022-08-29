<template>

  <div class="wrapper-content wrapper-content--fixed">
    <Intro
      class="intro"
      title="My posts:"
      >
      <!-- search -->
    <!-- <Search :value="search" @search="search = $event"/> -->
    </Intro>

    <!-- posts -->
    <PostsList :posts="postsLoaded"/>

  </div>

</template>

<script>
// import Search from '@/components/Blog/Search.vue'
export default {
  // components: { Search },
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded // подгружает из бд
    },
  }
}
</script>

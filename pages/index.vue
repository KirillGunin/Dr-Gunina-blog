<!-- это главная страница приложения как App.js -->
<template>

  <div class="wrapper-content wrapper-content--fixed">
    <promo />
    <Intro class="intro" title="My last posts:" />

    <!-- posts -->
    <PostsList :posts="postsLoaded" />
  </div>

</template>

<script>
import promo from '@/components/Promo.vue'
// import intro from '@/components/UI/Intro.vue' // мы его используем глобально через app-components.js
// import postsList from '@/components/Blog/PostsList.vue'

export default {
  components: { promo },
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>

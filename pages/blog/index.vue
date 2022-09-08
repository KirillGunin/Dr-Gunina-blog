<template>

  <div class="wrapper-content wrapper-content--fixed">
    <Intro
      class="intro"
      title="Все посты:"
      >
    </Intro>
      <!-- search -->
      <Search :value="search" @search="search = $event"/>

    <!-- posts -->
    <PostsList :posts="postsLoaded" />

  </div>

</template>

<script>
import Search from '@/components/Blog/Search.vue'
export default {
  components: { Search },
  head() {
    let title = 'Блог',
        content = 'Тут Вы сможете найти много полезной информации.',
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
  data() {
    return {
      search: ''
    }
  },
  computed: {
    // postsLoaded() {
    //   return this.$store.getters.getPostsLoaded // подгружает из бд
    // },
    postsLoaded() {
      const posts = this.$store.getters.getPostsLoaded,
      search = this.search
      if(search) {
        return posts.filter(el => el.title.toLowerCase().includes(search.trim().toLowerCase()))
      }
      return posts
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper-content.wrapper-content--fixed {
  margin-top: 108px;
}
</style>

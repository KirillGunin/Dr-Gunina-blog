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

      //if(!search) return posts // если поиск пустой, то вернет полный массив///////////////////////////////////////
      //if(search) return posts.filter(el => el.title.toLowerCase() === search.toLowerCase()) // этот поиск работает но по целому
      //if(search) return posts.filter(el => el.title.toLowerCase().indexOf(search.toLowerCase())) // этот работает но исключает то что ищешь
      
      // if(search) return posts.filter(el => el.title.toLowerCase().includes(search.toLowerCase())) // этот правильно работает

    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper-content.wrapper-content--fixed {
  margin-top: 108px;
}
</style>

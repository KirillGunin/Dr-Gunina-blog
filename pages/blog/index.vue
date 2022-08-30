<template>

  <div class="wrapper-content wrapper-content--fixed">
    <Intro
      class="intro"
      title="My posts:"
      >
      <!-- search -->
      <Search :value="search" @search="search = $event"/>
    </Intro>

    <!-- posts -->
    <PostsList :posts="postsLoaded" />

  </div>

</template>

<script>
import Search from '@/components/Blog/Search.vue'
export default {
  components: { Search },
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

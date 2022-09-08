<!-- это главная страница приложения как App.js -->
<template>

  <div class="wrapper-content wrapper-content--fixed">
    <Intro class="intro" title="Мои последние посты:" />

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
  head() {
    let title = 'Записки мамы педиатра',
        content = 'Меня зовут Гунина Ксения Александровна. Я педиатр, аллерголог-иммунолог. Заккончила СПБГПМУ в 2015 году и интернатуру по специальности педиатрия там же в 2016 году. В 2019 году окончила курсы первичной переподготовки в СЗГМУ им. И.И.Мечникова по специальности аллерголог-иммунолог. Являюсь членом EAACI, WAO и Союза Педиаторов России.',
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
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded.slice(0,3)
    }
  }
}
</script>

<style lang="scss" scoped>
.intro {
  margin: 30px 0 0;
}
</style>

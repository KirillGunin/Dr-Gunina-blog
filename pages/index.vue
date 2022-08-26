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
  // asyncData(context) { // эту дату используем в nuxt.js
  //   return new Promise ((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         postsLoaded: [
  //           {
  //             id: 1,
  //             title: 'Небезопасне игрушки',
  //             descr: 'Надеюсь все уже знают о случаях некроза кишечника из-за проглатывания магнитных шариков. Всё дело в том, что они могут примагничиваться друг к другу в разных отделах кишечника и приводить к затруднению питания тканей, а затем и к отмиранию (некрозу). Это жизнеугрожающее состояние!',
  //             img: 'https://sun9-5.userapi.com/impg/AoFNcllGDsB7A28KuCYQhQpaf9etRErmIb4iGg/SDb5wL13Zvo.jpg?size=1080x1080&quality=95&sign=860603878709d1da8110729d8bd0cc94&type=album',
  //             // likes: 432,
  //           }
  //         ]
  //       })
  //     }, 1500)
  //   })
  //   .then(data => {
  //     return data
  //   })
  //   .catch(error => {
  //     context.error(error) // обратимся к error который выкинет на layout error.vue
  //   })
  // }
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>

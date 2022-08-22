<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post" />
  </div>
</template>

<script>
import post from '@/components/Blog/Post.vue' // принимаем Posr.vue
export default {
  components: { post }, // регистрируем
  data() {
    return {
      post: {
        id: 1,
        title: 'Небезопасне игрышки',
        descr: 'Надеюсь все уже знают о случаях некроза кишечника из-за проглатывания магнитных шариков. Всё дело в том, что они могут примагничиваться друг к другу в разных отделах кишечника и приводить к затруднению питания тканей, а затем и к отмиранию (некрозу). Это жизнеугрожающее состояние!',
        img: 'https://sun9-5.userapi.com/impg/AoFNcllGDsB7A28KuCYQhQpaf9etRErmIb4iGg/SDb5wL13Zvo.jpg?size=1080x1080&quality=95&sign=860603878709d1da8110729d8bd0cc94&type=album',
        likes: 432,
        content: 'Надеюсь все уже знают о случаях некроза кишечника из-за проглатывания магнитных шариков. Всё дело в том, что они могут примагничиваться друг к другу в разных отделах кишечника и приводить к затруднению питания тканей, а затем и к отмиранию (некрозу). Это жизнеугрожающее состояние!',
      }
    }
  }
}
</script>

<style lang="scss">
.post {
  max-width: 900px;
  margin: 0 auto;
}
.post-header {
  text-align: center;
  margin-bottom: 30px;
  img {
    max-width: 400px;
    margin-bottom: 16px;
    border-radius: 5px;
  }
  p {
    color: black
  }
}
.post-body {
  text-align: end;
}
</style>

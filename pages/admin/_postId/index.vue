<!-- это файл редактирования -->
<template>
  <newPostForm
  :postEdit="post"
  @submit="onSubmit"/>
</template>

<script>
import newPostForm from '@/components/Admin/NewPostForm.vue'
export default {
  components: { newPostForm },
  layout: 'admin',
  data() {
    return {
      post: {
        id: 1,
        title: 'Небезопасные игрушки',
        img: 'https://sun9-5.userapi.com/impg/AoFNcllGDsB7A28KuCYQhQpaf9etRErmIb4iGg/SDb5wL13Zvo.jpg?size=1080x1080&quality=95&sign=860603878709d1da8110729d8bd0cc94&type=album',
        content: 'Надеюсь все уже знают о случаях некроза кишечника из-за проглатывания магнитных шариков. Всё дело в том, что они могут примагничиваться друг к другу в разных отделах кишечника и приводить к затруднению питания тканей, а затем и к отмиранию (некрозу). Это жизнеугрожающее состояние!',
      }
    }
  },
  methods: {
    onSubmit(post) {
      console.log('Post Editing')
      console.log(post)
    }
  }
}
</script>

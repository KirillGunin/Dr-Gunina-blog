<template>
  <section class="new-post">
    <div class="container">
      <!-- если неколько кнопок,то @submit.prevent для всей формы, а действия навешиваем на конкретные кнопки -->
      <form @submit.prevent="onSubmit">
        <AppInput v-model="post.img"> Картинка </AppInput>
        <AppInput v-model="post.title"> Заголовок </AppInput>
        <AppTextArea v-model="post.content"> Содержание </AppTextArea>
        <!-- buttons -->
        <div class="controls">
          <div class="btn btnDanger" @click="cancel">Отмена</div>
          <div class="btn btnDanger" @click="deletePost">Удалить</div>
          <AppButton class="btnPrimary">Сохранить</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    postEdit: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      post: this.postEdit ? {...this.postEdit} : { // если есть this.postEdit, то покажи текущие значения
        title: '',
        content: '',
        img: ''
      } // если нет, то покажи значения пустыми
    }
  },
  methods: {
    cancel() {
      this.$router.push('/admin/') // по кнопке отмена перекинет обратно на страницу админа
    },
    deletePost() {
      console.log(this.post) // приходит объект
     this.$emit('click', this.post)
    },
    onSubmit() {
      // console.log(this.post)
     this.$emit('submit', this.post) // передаем эмит в new-post index.vue
    }
  }
}
</script>

<style lang="scss" scoped>
.controls {
  text-align: center;
  margin: 20px 0;
}
</style>

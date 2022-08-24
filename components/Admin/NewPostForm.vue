<template>
  <section class="new-post">
    <div class="container">
      <!-- если неколько кнопок,то @submit.prevent для всей формы, а действия навешиваем на конкретные кнопки -->
      <form @submit.prevent>
        <AppInput v-model="post.img"> Картинка </AppInput>
        <AppInput v-model="post.title"> Заголовок </AppInput>
        <AppTextArea v-model="post.content"> Содержание </AppTextArea>
        <!-- buttons -->
        <div class="controls">
          <AppButton class="btnDanger" @click="cancel">Отмена</AppButton>
          <AppButton class="btnPrimary" @click="onSubmit">Сохранить</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        content: '',
        img: ''
      }
    }
  },
  methods: {
    cancel() {
      this.$router.push('/admin/') // по кнопке отмена перекинет обратно на страницу админа
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

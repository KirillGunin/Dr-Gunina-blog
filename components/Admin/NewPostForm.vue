<template>
  <section class="new-post">
    <div class="container">
      <!-- если неколько кнопок,то @submit.prevent для всей формы, а действия навешиваем на конкретные кнопки -->
      <form @submit.prevent="onSubmit">
        <AppInput v-model="post.img"> Картинка </AppInput>
        <AppInput v-model="post.img2" :required="false"> Картинка </AppInput>
        <AppInput v-model="post.img3" :required="false"> Картинка </AppInput>
        <AppInput v-model="post.img4" :required="false"> Картинка </AppInput>
        
        <AppInput v-model="post.title"> Заголовок </AppInput>
        <AppTextArea v-model="post.content"> Содержание </AppTextArea>
        <!-- buttons -->
        <div class="controls">
          <!-- <div class="btn btnDanger" @click="cancel">Отмена</div> -->
          <img class="svg" @click="cancel" src="@/assets/arrow-svgrepo-com.svg">
          <!-- <AppButton class="btnPrimary">Сохранить</AppButton> -->
          <button><img class="svg" @submit="onSubmit" src="@/assets/add-plus-svgrepo-com.svg"></button>
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
      post: this.postEdit ? {...this.postEdit} : { // если есть this.postEdit, nj покажи текущие значения
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

.svg {
  display: inline-block;
  line-height: 1;
  cursor: pointer;
  height: 40px;
  width: 40px;
}

button {
  padding: 0;
  background-color: transparent;
  border: none;
}
</style>

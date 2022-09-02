<template>
  <section class="auth">
    <div class="container">

      <!-- форма входа -->
      <form @submit.prevent="onSubmit" class="auth__form">

        <AppInput type="email" v-model="user.email">Введите логин:</AppInput>
        <AppInput type="password" v-model="user.password">Введите пароль:</AppInput>

        <div class="controls">
          <AppButton>Войти</AppButton>
        </div>
      </form>

    </div>
  </section>
</template>

<script>
export default {
  head() {
    let title = 'Записки мамы педиатора',
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
      user: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    apiKey() {
      return process.env.SECRET_KEY
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('authUser', this.user)
      .then((res) =>{
        this.$router.push('/admin')
      })
      .catch((error) => {
        console.log(error),
        // reset
        this.user.email = '',
        this.user.password = ''
      })
    }
  }
}
</script>

<style lang="scss">
.auth {
  text-align: center;
}
.auth__form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  // height: 70vh;
  margin: 10em auto 10em;
  input {
    min-width: 400px;
  }
}
</style>

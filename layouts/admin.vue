<template>
  <client-only>
    <div class="wrapper">
      <Header />
      <!-- content -->
      <div class="wrapper-content wrapper-content--fixed">
        <Intro title="Личный кабинет">
          <nuxt-link to="/admin" class="link linkWhite">Админ</nuxt-link>
          <nuxt-link to="/admin/new-post" class="link linkWhite">Новый пост</nuxt-link>
          <span @click="logoutUser" class="link linkWhite"> Выйти</span>

        </Intro>
        <nuxt />
      </div>
    </div>
  </client-only>
</template>

<script>
import Header from '~/components/system/Header.vue'
export default {
  components: { Header },
  middleware: ['auth'], // так мы обращаемся к нужному файлу в папке middleware
  methods: {
    logoutUser() {
      this.$store.dispatch('logoutUser')
      .then(() => {
        this.$router.push('/admin/auth')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper-content.wrapper-content--fixed {
    margin-top: 104px;
  }
  </style>

<template>
  <no-ssr>
    <div class="wrapper">
      <Header />
      <!-- content -->
      <div class="wrapper-content wrapper-content--fixed">
        <Intro title="Царь во дворца">
          <nuxt-link to="/admin" class="link linkWhite">Админ</nuxt-link>
          <nuxt-link to="/admin/new-post" class="link linkWhite">Новый пост</nuxt-link>
          <span @click="logoutUser" class="link linkWhite"> Выйти</span>

        </Intro>
        <nuxt />
      </div>
    </div>
  </no-ssr>
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

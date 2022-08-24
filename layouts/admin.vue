<template>
  <div class="wrapper">
    <Header />
    <!-- content -->
    <div class="wrapper-content wrapper-content--fixed">
      <Intro title="Царь во дворца">
        <nuxt-link to="/admin" class="link linkWhite">Админ</nuxt-link>
        <nuxt-link to="/admin/new-post" class="link linkWhite">Новый пост</nuxt-link>

      </Intro>
      <nuxt />
    </div>

  </div>
</template>

<script>
import Header from '~/components/system/Header.vue'
export default {
  components: { Header }
}
</script>

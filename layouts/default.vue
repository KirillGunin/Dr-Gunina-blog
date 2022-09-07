<template>
  <div class="wrapper">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/system/Header.vue'
import Footer from '~/components/system/Footer.vue'
export default {
  components: { Header, Footer }
}
</script>

<style lang="scss">
@media (max-width: 479px) {
  .wrapper {
    margin: 0 10px auto;
  }
}

</style>

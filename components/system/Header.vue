<!-- Тут навбар -->

<template>

  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">

          <div class="logo">Dr. Gunina</div>
          <ul class="navbar-list">
            <!-- пройдем по массиву links указанному в экспорте -->
            <li class="navbar-item" v-for="link in links" :key="link.title">
              <!-- и выведем необходимые параметры -->
              <nuxt-link class="navbar-link" :title="link.title" :to="link.url">{{link.title}}</nuxt-link>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </header>

</template>

<script>
export default {
   data() {
    return {
      links: [
        {title: 'Домой', url:'/blog'},
        {title: 'О блоге', url:'/about'},
      ]
    }
  }
}
</script>

<style lang="scss">

.navbar-link {
  &.nuxt-link-exact-active {
    color: #f08c22;
  }
}

</style>

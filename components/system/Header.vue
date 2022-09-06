<!-- Тут навбар -->

<template>

  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">

          <div class="logo">
            <img class="logoIMG" src="@/assets/logo.png">
            <nuxt-link class="auth-link navbar-link" to="/admin/auth">Dr. Gunina</nuxt-link>
          </div>

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
        {title: 'Домой', url:'/'},
        {title: 'Блог', url:'/blog'},
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

.auth-link {
  color: #909399;
  text-align: start;
  width: 70px;
}

.logo {
  display: flex;
  align-items: center;
    .logoIMG {
    width: 60px;
    height: auto;
    margin-right: 10px;
  }
}

@media (max-width: 479px) {
  .navbar-content {
    margin: 0 15px 0;
  }
}

</style>

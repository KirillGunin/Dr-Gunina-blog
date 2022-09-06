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

          <transition name="fade" mode="out-in">
            <i class="material-icons menu" v-if="!show" @click="show = !show" key="menu" >menu</i>
          </transition>
          
          <transition name="fade">
            <ul class="navbar-list" v-if="show">
              <!-- пройдем по массиву links указанному в экспорте -->
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <!-- и выведем необходимые параметры -->
                <nuxt-link class="navbar-link" :title="link.title" :to="link.url">{{link.title}}</nuxt-link>
              </li>
              <i class="material-icons clear" v-if="show" @click="show = !show" key="clear" >clear</i>
            </ul>
        </transition>
        

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
      ],
      show: false
    }
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

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
  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .navbar-content {
    margin: 0 15px 0;
  }
  .navbar-list {
    display: flex;
    flex-direction: column;
    height: 120px;
    justify-content: space-around;
    align-items: flex-end;
  }
  .navbar-item {
    margin-right: 0px;
    // transition: all .3s ease;
  }

}

</style>

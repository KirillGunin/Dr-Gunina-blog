<!-- Тут навбар ////////////////////////////////// //////////////////////-->

<template>

  <header>
    <div class="navbar">
      <div class="container">

        <div class="navbar-content">

          <!-- navbar logo -->
          <div class="logo">
            <img class="logoIMG" src="@/assets/logo.png">
            <nuxt-link class="auth-link navbar-link" to="/admin/auth">Dr. Gunina</nuxt-link>
          </div>

          <!-- navbar icon -->
          <div class="burger-menu">
            <transition name="fade" mode="out-in" >
              <i class="material-icons menu" v-if="!show" @click="show = !show" key="menu" >menu</i>
              <i class="material-icons clear" v-if="show" @click="show = !show" key="clear" >clear</i>
            </transition> 
          </div>

          <!-- burger menu -->
          <transition name="fade">
            <ul class="navbar-list" v-if="show">
              <!-- пройдем по массиву links указанному в экспорте -->
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <!-- и выведем необходимые параметры -->
                <nuxt-link class="navbar-link" :title="link.title" :to="link.url">{{link.title}}</nuxt-link>
              </li>
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
  },
  methods: {
    checkSize: function () {
      const width = window.innerWidth
      if(width > 479) {
        this.show = true
      }
    }
  },
  mounted() {
    this.checkSize()
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

.burger-menu {
  display: none
}

@media (max-width: 479px) {
  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .material-icons{
    cursor: pointer;
  }
  .navbar-content {
    display: flex;
    justify-content: space-between;
    margin: 0 10px 0;
    width: 100%;
    flex-wrap: wrap;
  }
  .navbar-list {
    flex-direction: column;
    height: 96px;
    justify-content: space-evenly;
    width: 100%;
    margin: 10px 0 -9px 0;
    opacity: 0.9;
  }
  .navbar-item {
    margin: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 31px;
    background-color: #515151;
    opacity: 0.95;
    border-radius: 3px;
    a {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    &:hover{
      opacity: 1;
      background-color: #e69d4b;
    }
    // transition: all .3s ease;
  }

  .navbar-menu {
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    width: 100%;
  }

  .logo {
    .navbar-link {
    font-size: 22px;
    color: #909399;
    &.nuxt-link-exact-active {
      color: #f08c22;
    }
  }
  }

  .navbar-link {
    font-size: 22px;
    color: #ffffff;
    &.nuxt-link-exact-active {
      color: #ffffff;
    }
  }

  .burger-menu {
    display: flex
  }

  .container {
    width: 100%;
    display: flex;
    justify-content: center;
  }
}

</style>

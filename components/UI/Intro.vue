<!-- UI - это юзер интерфейс. То с чем может взаимодействовать пользователь -->

<template>
  <section class="intro">
    <div class="container">
      <h2>{{ title }}</h2>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">

.intro {
  width: 100%;
  margin: 30px 0;
  text-align: center;
  color: #ffffff;
  background-color: #e69d4b;
  border-radius: 5px;
  h1 {
    font-size: 26px;
  }
}

</style>

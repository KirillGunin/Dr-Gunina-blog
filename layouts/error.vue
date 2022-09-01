<!-- этот layout   Nuxt.js автоматически понимает как layout ошибки 404 -->
<template>
  <section class="not-found">
    
    <div class="container">
      <div class="not-found__wrapper">
        <p class="title">Страница не найдена</p>
        <nuxt-link to="/">Вернуться на домашнюю страницу</nuxt-link>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  head() {
    let title = 'Страница не найдена',
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
}
</script>

<style lang="scss">
.not-found__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  margin: 16em auto 15em;
}
</style>

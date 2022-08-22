<template>

  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h1 class="title">About my blog</h1>
        <p>Врач педиатр, аллерголог-иммунолог, член EAACI и Союза Педиатров России, автор информационного блога @dr_gunina. Закончила СПБГПМУ и интернатуру по специальности педиатрия, а также курсы первичной переподготовки в СЗГМУ им. И. И. Мечникова по специальности аллергология-иммунология. В своей практике придерживается принципов доказательной медицины.</p>
        <intro title="Гунина Ксения"/>
        <img src="@/assets/img/about.png" alt="">
        <p>«Каждая мама хочет, чтобы её малыш правильно и полноценно питался. С нашим пособием вы сможете привить или исправить своему ребёнку полезные пищевые привычки, не будете ломать голову над придумыванием рецептов, а начнёте просто наслаждаться материнством.»</p>
      </div>
    </section>
  </div>

</template>

<script>
import intro from '@/components/UI/Intro.vue'
export default {
components: { intro }
}
</script>

<style lang="scss">
.about {
  text-align: center;
  p {
    margin-bottom: 10px;
  }
}

</style>

<template>

  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <Intro title="Про меня и мой блог"/>
        <!-- <h1 class="title">Про меня и мой блог</h1> -->
        <p>Меня зовут Гунина Ксения Александровна. Я педиатр, аллерголог-иммунолог. Заккончила СПБГПМУ в 2015 году и интернатуру по специальности педиатрия там же в 2016 году. В 2019 году окончила курсы первичной переподготовки в СЗГМУ им. И.И.Мечникова по специальности аллерголог-иммунолог. Являюсь членом EAACI, WAO и Союза Педиаторов России.</p>
        <img src="@/assets/img/1.JPEG" alt="">
        <p>В своей практике придерживаюсь принципов доказательной медицины. По стандартам диагностики и лечения чаще всего опираюсь на зарубежные рекомендации. С большим удовольствием занимаюсь младенческими проблемами (нарушение лактации, прикорм, фнкциональные запоры, диареи, колики, поведенческие нарушения сна), лечением атопического дерматита, составлением догоняющего графика вакцинации, лечением аллергического ринита, крапивницы, да и вообще люблю случаи "Мы обошли всех, но так и не поняли, что с ребенком"</p>
        <p>В свободное от медицины время я занимаюсь танцами и посещаю спорт зал</p>
      </div>
    </section>
  </div>

</template>

<script>
  export default {
    head() {
    let title = 'Обо мне',
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
.wrapper-content.wrapper-content--fixed {
  margin-top: 84px;
}

.about {
  text-align: center;
  p {
    margin-bottom: 10px;
  }
}

img {
  border-radius: 5px;
}
</style>

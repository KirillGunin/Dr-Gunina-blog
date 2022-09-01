<template>

  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <Intro title="Про меня и мой блог"/>
        <!-- <h1 class="title">Про меня и мой блог</h1> -->
        <p>Меня зовут Гунина Ксения Александровна. Я педиатр, аллерголог-иммунолог. Заккончила СПБГПМУ в 2015 году и интернатуру по специальности педиатрия там же в 2016 году. В 2019 году окончила курсы первичной переподготовки в СЗГМУ им. И.И.Мечникова по специальности аллерголог-иммунолог. Являюсь членом EAACI, WAO и Союза Педиаторов России.</p>
        <img src="@/assets/img/about.png" alt="">
        <p>В своей практике придерживаюсь принципов доказательной медицины. По стандартам диагностики и лечения чаще всего опираюсь на зарубежные рекомендации. С большим удовольствием занимаюсь младенческими проблемами (нарушение лактации, прикорм, фнкциональные запоры, диареи, колики, поведенческие нарушения сна), лечением атопического дерматита, составлением догоняющего графика вакцинации, лечением аллергического ринита, крапивницы, да и вообще люблю случаи "Мы обошли всех, но так и не поняли, что с ребенком"</p>
        <p>В свободное от медицины время я занимаюсь танцами и посещаю спорт зал</p>
        <p>Вы можете записаться ко мне на очный приём</p>
        <p>тут:</p>
        <a href="https://everyday.clinic/">Everyday Clinic</a>
        <p>и тут:</p>
        <a href="https://www.medicom-plus.ru/sveden/common/g-gatchina-ul-khokhlova-d-8-pom-7n-mts-orlova-roshcha/">Медиком</a>

      </div>
    </section>
  </div>

</template>

<script>
  export default {
    head() {
    let title = 'Обо мне',
        content = 'qwertyuiop',
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
.about {
  text-align: center;
  p {
    margin-bottom: 10px;
  }
}

</style>

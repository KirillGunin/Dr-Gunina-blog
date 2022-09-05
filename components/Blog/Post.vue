<!-- Один пост -->

<template>
  
  <section class="post">
    <div class="container">
      
      <!-- header -->
      <div class="post-header">
        <div class="post-slider">
          <!-- <img :src="post.img" alt="post.title"> -->
          <carousel
          :perPage = "1">
            <slide>
              <img :src="post.img" alt="post.title">
            </slide>
            <slide v-if="post.img1">
              <img :src="post.img1" alt="post.title">
            </slide>
            <slide v-if="post.img2">
              <img :src="post.img2" alt="post.title">
            </slide>
            <slide v-if="post.img3">
              <img :src="post.img3" alt="post.title">
            </slide>
          </carousel>
        </div>
        <h1 class="title">{{ post.title }}</h1>
      </div>

      <!-- body -->
      <div class="post-body">
        <p style="white-space: pre-line">{{ post.content }}</p>
        <br>
        <p>{{ post.date }}</p>
      </div>

    </div>
  </section>

</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

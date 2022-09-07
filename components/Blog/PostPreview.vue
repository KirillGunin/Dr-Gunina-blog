<!-- Это превьюшка одного поста -->
<!-- за :to="getLink" будет следить computed -->
<template>
  <nuxt-link :to="getLink" class="post-preview">
    <img :src="post.img" :alt="post.title">
    <div class="post-content">
      <h3 class="title"> {{ post.title }}</h3>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    admin: {
      type: Boolean,
      require: false
    }
  },
  computed: {
    getLink() { // следит есть админ или нет
      return this.admin ? `/admin/${this.post.id}` : `/blog/${this.post.id}`
    }
  }
}
</script>

<style lang="scss">
.post-preview {
  width: 33%;
  height: 460px;
  padding: 16px;
  margin-bottom: 20px;
  text-align: center;
  img {
    margin-bottom: 16px;
    border-radius: 5px;
  }
  .post-content {
    p {
      color: black
    }
  }
}

@media (max-width: 479px) {
/* стили для телефонов - начало */
  .post-preview {
    width: 99%;
    height: 450px;
    padding: 30px;
    margin-bottom: 35px;
  }

  .title {
    font-size: 20px;
  }
}
</style>

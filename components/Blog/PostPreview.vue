<!-- Это превьюшка одного поста -->
<!-- за :to="getLink" будет следить computed -->
<template>
  <nuxt-link :to="getLink" class="post-preview">
    <img :src="post.img" :alt="post.title">
    <div class="post-content">
      <h3 class="title"> {{ post.title }}</h3>
      <!-- <span v-if="admin" @click="deletePost(post.id)" class="link">Удалить пост</span> -->
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
</style>

<template>
  <nuxt-link :to="/blog/+post.id" class="post-preview">
    <img :src="post.img" :alt="post.title">
    <div class="post-content">
      <h3 class="title"> {{ post.title }}</h3>
        <!-- <div class="likes">
          <p>👍</p>
          <h4>{{ post.likes }}</h4>
        </div> -->

        <!-- <p>{{ post.descr }}</p> -->
    </div>
  </nuxt-link>
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

<style lang="scss">
.post-preview {
  max-width: 33%;
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

.likes {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #e8e3e3;
  width: 80px;
  border-radius: 25px;
}
</style>

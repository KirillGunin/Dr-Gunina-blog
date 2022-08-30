<template>
  <section class="post-list">
    <div class="container">
      <div class="posts__wrapper">
        <!-- это мы прошли по массиву posts и передаем пост каждый PostPreview :post="post"-->
        <postPreview
          v-for="post in posts" :key="post.id"
          :admin="admin"
          :post="post" />
        <span v-if="!posts.length">
          Вообще такого поста нет.
          <br>
          Но мы сообщим Вам как только он появиться.
          <br>
          <img class="no_posts" src="@/assets/no_posts.png">
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import postPreview from '@/components/Blog/PostPreview.vue'
export default {
  components: { postPreview },
  props: {
    posts: {
      type: Array,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.posts__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}
.no_posts {
  border-radius: 50%;
  height: 300px;
  width: 300px;
}
</style>

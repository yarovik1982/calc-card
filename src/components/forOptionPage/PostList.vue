<template>
   <div class="posts mt-3"
    v-if="posts.length > 0"
   >
    <post-item
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @removePost="$emit('removePost', post)"
    />
    </div>
    <h2 class="text-danger"
      v-else
    >Список постов пуст ...</h2>
</template>

<script>
import PostItem from './PostItem.vue'
export default {
  components: { PostItem },
   name:'post-list',
   props:{
      posts:{
         type:Array,
         required:true,
      }
   }
}
</script>

<style scoped>
.post{
  background-image: linear-gradient(
    0deg,
    rgb(65, 184, 131),
    rgba(65, 184, 131,.5)25% 75%,
    rgb(65, 184, 131)
  );
  box-shadow: 0 0 9px 4px rgb(53, 73, 94);
}
</style>
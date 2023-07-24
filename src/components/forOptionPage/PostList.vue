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


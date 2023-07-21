<template>
   <div class="posts mt-3 ">
    <div class="post mt-3 p-2 rounded"
      v-for="(post, i) in posts"
      :key="i"
    >
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <h4 class="m-0">Post {{i + 1}}</h4>
          <p  class="m-0">{{post.title}}</p>
          <p  class="m-0">{{post.description}}</p>
        </div>
        <button class="btn btn-danger btn-sm"
          
        >Удалить</button>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
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
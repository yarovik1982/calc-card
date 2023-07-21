<template>
   <div class="post mt-3 p-2 rounded">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <p class="m-0">{{post.title}}</p>
          
          <p class="m-0">{{post.description}}</p>
        </div>
        <button class="btn btn-danger btn-sm"
          @click="$emit('removePost', post)"
        >Удалить</button>
      </div>
    </div>
</template>

<script>
export default {
   name:'post-item',
   props:{
      post:{
         type:Object,
         required:true,
      }
   }
}
</script>
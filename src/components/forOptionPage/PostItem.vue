<template>
   <div class="post mt-3 p-2 rounded"
      :post="post"
      :i="i"
      :title="title"
      :description="description"
    >
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <h5 class="m-0">Post {{i + 1}}</h5>
          <p class="m-0">{{title}}</p>
          
          <p class="m-0">{{description}}</p>
        </div>
        <button class="btn btn-danger btn-sm"
          @click='removePost(post)'
        >Удалить</button>
      </div>
    </div>
</template>

<script>
export default {
   name:'post-item',
   props:{
      post:{
         i:Number,
         title:String,
         description:String,
      }
   }
}
</script>
<template>
  <div class="container-fluid">
    <form class="w-100 m-auto" @submit.prevent>
      <h3 class="text-center text-secondary">Создать пост</h3>
      <div class="mb-3">
        <input
          type="text"
          class="form-control form-control-sm bg-secondary border-0 text-light"
          id="title"
          name="title"
          v-model="post.title"
          autocomplete="off"
        />
      </div>
      <div class="mb-3">
        <input
          type="text"
          class="form-control form-control-sm bg-secondary border-0 text-light"
          id="description"
          name="description"
          v-model="post.description"
          autocomplete="off"
        />
      </div>
      <button
        type="submit"
        class="btn btn-primary btn-sm"
        @click="createPost"
      >
        Отправить
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "form-component",
  data(){
   return{
      post:{
         title:'',
         description:'',
      }
   }
  },
  methods:{
   createPost(){
      this.post.id = Date.now(),
      this.$emit('create', this.post)
      
      this.post = {
         title:'',
         description:'',
      }
    },
  },
};
</script>

<style scoped>
input{
   background: #223140;
}
input:focus{
   background: #27313b;
   box-shadow: 0 0 5px 2px #41B782;
}
</style>

<template>
  <app-dialog
    v-model:show="dialogVisible"
  >
    <form-component
      @create="createPost"
    />
  </app-dialog>
  <h1 class="text-center">Example Options API</h1>
  
  <div class="container-fluid">
    <app-buttom
      class="btn btn-primary btn-sm"
      @click="showDialog"
    >Создать пост</app-buttom>
    <post-list
      :posts="posts"
      @removePost="removePost"
    />
  </div>
</template>
<script>
import FormComponent from "@/components/forOptionPage/FormComponent.vue";
import PostList from "@/components/forOptionPage/PostList.vue";
import AppDialog from '@/components/UI/AppDialog.vue';
import AppButtom from '@/components/UI/AppButtom.vue';
export default {
    components: { FormComponent, PostList, AppDialog, AppButtom },
  name: "options-page",
  data() {
    return {
      posts: [
        { id: 1, title: "Название поста", description: "Description 1" },
        { id: 2, title: "Название поста", description: "Description 2" },
        { id: 3, title: "Название поста", description: "Description 3" },
      ],
      dialogVisible:false,
    };
  },
  methods:{
   createPost(post){
      this.posts.push(post)
      this.showDialog()
   },
   removePost(post){
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog(){
      this.dialogVisible = true
    }
  },
  
};
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
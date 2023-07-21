<template>
  <h3 class="text-center">Example Options API</h3>
  <div class="container-fluid">
    <form-component
      @create="createPost"
    />
    <post-list
      :posts="posts"
    />
  </div>
</template>
<script>
import FormComponent from "@/components/forOptionPage/FormComponent.vue";
import PostList from "@/components/forOptionPage/PostList.vue";
export default {
    components: { FormComponent, PostList },
  name: "options-page",
  data() {
    return {
      posts: [
        { id: 1, title: "Название поста", description: "Description 1" },
        { id: 2, title: "Название поста", description: "Description 2" },
        { id: 3, title: "Название поста", description: "Description 3" },
      ],
    };
  },
  methods:{
   createPost(post){
      this.posts.push(post)
   },
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
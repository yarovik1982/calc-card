<template>
  <app-dialog v-model:show="dialogVisible">
    <form-component @create="createPost" />
  </app-dialog>
  <h1 class="text-center">Example Options API</h1>

  <div class="container-fluid">
    <div class="d-flex py-4 justify-content-between align-items-center">
      <app-buttom 
        class="btn btn-primary btn-sm text-nowrap" 
        @click="showDialog"
      > 
        Создать пост
      </app-buttom>
      <app-select
        v-show="posts.length >= 1"
        v-model="selectedSort"
        :options="sortOption"
      ></app-select>
    </div>
    <post-list 
      :posts="sortPosts" 
      @removePost="removePost" 
    />
  </div>
</template>
<script>
import FormComponent from "@/components/forOptionPage/FormComponent.vue";
import PostList from "@/components/forOptionPage/PostList.vue";
import AppDialog from "@/components/UI/AppDialog.vue";
import AppButtom from "@/components/UI/AppButtom.vue";
import AppSelect from '@/components/UI/AppSelect.vue';

import axios from 'axios'
export default {
  components: { FormComponent, PostList, AppDialog, AppButtom, AppSelect },
  name: "options-page",
  data() {
    return {
      posts: [
        { id: 1, title: "Название поста", body: "Description 1" },
        { id: 2, title: "Название поста", body: "Description 2" },
        { id: 3, title: "Название поста", body: "Description 3" },
      ],
      dialogVisible: false,
      selectedSort:'',
      sortOption:[
        {value:'title',name:'названию'},
        {value:'body',name:'описанию'},
        {value:'id',name:'идентификатору'},
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPost(){
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        this.posts = response.data
      }catch(e){
        alert("Ошибка")
      }
    }
  },
  computed:{
    sortPosts(){
      return [...this.posts].sort((a, b) => (a[this.selectedSort] > b[this.selectedSort]) ? 1 : -1)
    },
  },
  // watch:{
  //   selectedSort(newValue){
  //     this.posts.sort((a, b) => {
  //       return (a[newValue] > b[newValue]) ? 1 : -1
  //     })
  //   },
  // },
  mounted(){
    this.fetchPost()
  },
};
</script>

<style scoped>
.post {
  background-image: linear-gradient(
    0deg,
    rgb(65, 184, 131),
    rgba(65, 184, 131, 0.5) 25% 75%,
    rgb(65, 184, 131)
  );
  box-shadow: 0 0 9px 4px rgb(53, 73, 94);
}
</style>

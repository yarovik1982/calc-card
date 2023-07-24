<template>
  <app-dialog v-model:show="dialogVisible">
    <form-component @create="createPost" />
  </app-dialog>
  <h1 class="text-center">Example Options API</h1>

  <div class="container-fluid">
    <div class="d-flex justify-content-center">
      <input
        class="form-control form-control-sm w-50"
        v-model="searchQuery"
        placeholder="Поиск ..."
      />
    </div>
    <div class="d-flex py-4 justify-content-between align-items-center">
      <app-buttom
        class="btn btn-primary btn-sm text-nowrap"
        @click="showDialog"
      >
        Создать пост
      </app-buttom>
      <transition>
        <app-select
          v-show="posts.length >= 1"
          v-model="selectedSort"
          :options="sortOption"
        ></app-select>
      </transition>
    </div>
    <post-list :posts="sortAndSearchPosts" @removePost="removePost" v-if="!isLoading" />
    <app-loader v-else />

    <div class="pagination d-flex justify-content-center align-items-center gap-2 py-4">
      <div 
        class="pagination-item btn btn-primary btn-sm"
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :class="{'current-item': page === pageNumber}"
      
        @click="changePage(pageNumber)"
      >{{pageNumber}}</div>
    </div>
  </div>
</template>
<script>
import FormComponent from "@/components/forOptionPage/FormComponent.vue";
import PostList from "@/components/forOptionPage/PostList.vue";
import AppDialog from "@/components/UI/AppDialog.vue";
import AppButtom from "@/components/UI/AppButtom.vue";
import AppSelect from "@/components/UI/AppSelect.vue";
import AppLoader from "@/components/UI/AppLoader.vue";
import AppInput from "@/components/UI/AppInput.vue";

import axios from "axios";
export default {
  components: {
    FormComponent,
    PostList,
    AppDialog,
    AppButtom,
    AppSelect,
    AppLoader,
    AppInput,
  },
  name: "options-page",
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isLoading: false,
      selectedSort: "",
      searchQuery:'',
      page:1,
      limit:10,
      totalPages:0,
      sortOption: [
        { value: "title", name: "названию" },
        { value: "body", name: "описанию" },
        { value: "id", name: "идентификатору" },
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
    changePage(pageNumber){
      this.page = pageNumber
    },
    async fetchPost() {
      try {
        this.isLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?", {
            params:{
              _page:this.page,
              _limit:this.limit,
            }
          }
        );
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = response.data;
      } catch (e) {
        alert("Ошибка");
      } finally {
        this.isLoading = false;
      }
    },
  },
  computed: {
    sortPosts() {
      return [...this.posts].sort((a, b) =>
        a[this.selectedSort] > b[this.selectedSort] ? 1 : -1
      );
    },
    sortAndSearchPosts(){
      return this.sortPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    },
  },
  watch:{
    page(){    //название ф-ции должно совпадать с именем свойства для, которого назначается наблюдатель
      this.fetchPost()
    },
  },
  mounted() {
    this.fetchPost();
  },
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.current-item{
  background-color: #ccc;
  color: teal;
}
</style>

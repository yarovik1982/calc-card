<template>
  <header class="text-center" style="background: #223140">
    <div class="container-fluid">
      <div class="row">
        <div class="col-5 p-0 d-flex justify-content-end h-100">
          <router-link
            to="/"
            class="py-1 px-2 text-decoration-none text-light h-100"
            >Options</router-link
          >
        </div>
        <div class="col-2 d-flex justify-content-center p-0">
          <img src="./assets/logo.png" alt="LOGO" width="25" />
        </div>
        <div class="col-5 p-0 d-flex justify-content-start h-100">
          <router-link
            to="/composition"
            class="py-1 px-2 text-decoration-none text-light h-100"
            >Composition</router-link
          >
        </div>
      </div>
    </div>
  </header>
  <!-- <router-view/> -->
  <h3 class="text-center">Example Options API</h3>
  <div class="container-fluid">
    <form class="w-50 m-auto" @submit.prevent="createPost">
    <div class="mb-3">
      <input
        type="text"
        class="form-control form-control-sm"
        id="title"
        name="title"
        v-model="title"
        :title="title"
      />
    </div>
    <div class="mb-3">
      <input 
        type="text" 
        class="form-control form-control-sm" 
        id="description" 
        name="description"
        v-model="description"
        :description="description"
      />
    </div>
    <button type="submit" class="btn btn-primary btn-sm">Отправить</button>
  </form>
  <div class="posts mt-3 ">
    <div class="post border border-dark mt-3 p-2"
      v-for="(post) in posts"
      :key="post.id"
    >
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <h4 class="mb-1">{{post.title}}</h4>
          <p>{{post.description}}</p>
        </div>
        <button class="btn btn-danger btn-sm"
          @click='removePost(post)'
        >Удалить</button>
      </div>
    </div>
    
  </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return{
      title:'',
      description:'',
      posts:[
        {id:1, title:'Post 1', description:'Description 1'},
        {id:2, title:'Post 2', description:'Description 2'},
        {id:3, title:'Post 3', description:'Description 3'},
      ],
    }
  },
  methods:{
    createPost(){
      const newPost = {
        id: Date.now(),
        title : this.title,
        description : this.description
      }
      this.posts.push(newPost)
      this.title = ''
      this.description = ''
    },
    removePost(post){
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
  },
};
</script>

<style>
@import "@/assets/styles/index.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: linear-gradient(
    135deg,
    rgb(65, 184, 131),
    rgb(53, 73, 94),
    rgb(65, 184, 131),
    rgb(53, 73, 94),
    rgb(65, 184, 131),
    rgb(53, 73, 94)
  );
  color: #f8f9ed;
  min-height: 100vh;
}
a {
  background: rgba(0, 0, 0, 0);
  transition: background 0.3s linear;
}
a.router-link-active {
  background: #1c2834;
}
</style>

<template>
 <header-component/>
  <router-view/>
</template>

<script>
import HeaderComponent from './components/forOptionPage/HeaderComponent.vue';
export default {
  name: "App",
  components:{HeaderComponent},
  
  
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

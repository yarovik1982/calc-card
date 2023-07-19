<template>
  <header class="text-center bg-primary">
    <img src="./assets/logo.png" alt="LOGO" width="25" />
  </header>
  <doc-head></doc-head>
  <div class="container-fluid">
    <div class="mt-1 d-flex justify-content-between">
      <button class="btn btn-primary btn-sm">Добавить</button>
      <button class="btn btn-warning btn-sm" @click="saveData">
        Сохранить и закрыть
      </button>
    </div>
  </div>
</template>

<script>
import DocHead from "@/components/DocHead.vue";
export default {
  name: "App",
  components: {
    // DocTitle,
    DocHead,
  },
  data() {
    return {
      data: [],
    };
  },
  methods: {
    saveData() {
      const obj = {
        cardName: this.$refs.docHead.value,
        cardDate: this.$refs.docHead.date,
      };
      const savedData = JSON.parse(localStorage.getItem("data")) || [];
      savedData.push(obj);
      localStorage.setItem("data", JSON.stringify(savedData));
    },
  },
  mounted(){
    const savedData = JSON.parse(localStorage.getItem('data')) || [];
    this.data = savedData;
  },
};
</script>

<style>
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
  /* color: #2c3e50; */
  color: #ccc;
  min-height: 100vh;
}
</style>

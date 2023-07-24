<template>
   <div>
      <div class="spinner">
        <div></div>
        <div></div>
      </div>
    </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
   .spinner {
  width: 100px;
  height: 100px;
  position: relative;
  margin: 0 auto;
}
.spinner div {
  width: 100%;
  height: 100%;
  border: 10px solid transparent;
  border-top-color: #ad60f5;
  border-radius: 50%;
  position: absolute;
  animation: spinnerOne 1.2s linear infinite;
}
@keyframes spinnerOne {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
    border-width: 1px;
  }
  100% {
    transform: rotate(360deg);
  }
}
.spinner div:nth-of-type(2) {
  border: 10px solid transparent;
  border-bottom-color: #ad60f5;
  animation: spinnerTwo 1.2s linear infinite;
}
@keyframes spinnerTwo {
  0% {
    transform: rotate(0deg);
    border-width: 1px;
  }
  50% {
    transform: rotate(180deg);
    border-width: 10px;
  }
  100% {
    transform: rotate(360deg);
    border-width: 1px;
  }
}
</style>

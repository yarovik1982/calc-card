<template>
  <div
    class="app-dialog position-fixed w-100 h100 d-flex justify-content-center align-items-center"
    v-if="show"
    @click="hideDialog"
  >
    <div class="app-dialog-content bg-light rounded" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "app-dialog",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  components: {},
  data() {
    return {};
  },
  methods: {
   hideDialog(){
      this.$emit('update:show', false)
   }
  },
};
</script>
<style scoped>
.app-dialog {
  background-image: linear-gradient(
    135deg,
    rgb(65, 184, 131),
    rgb(53, 73, 94),
    rgb(65, 184, 131),
    rgb(53, 73, 94),
    rgb(65, 184, 131),
    rgb(53, 73, 94)
  );
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.app-dialog-content {
  background-color: #fff;
  min-width: 300px;
  min-height: 50px;
  padding: 24px;
}
</style>

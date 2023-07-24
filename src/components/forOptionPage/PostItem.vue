<template>
  <div class="post mt-3 p-2 ">
    <div class="container-fluid">
      <div class="row d-flex align-items-center">
        <div
          class="col-12 col-sm-9"
          style="padding-right: 16px; text-align: justify"
        >
          <h3 class="m-0">{{ post.title }}</h3>

          <p class="m-0">{{ post.body }}</p>
        </div>
        <div
          class="col-12 col-sm-3 d-flex justify-content-center justify-content-sm-end py-3"
        >
          <button
            class="btn btn-danger btn-sm"
            @click="$emit('removePost', post)"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "post-item",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post{
  /* background-image: linear-gradient(
    0deg,
    rgb(65, 184, 131),
    rgba(65, 184, 131,.5)25% 75%,
    rgb(65, 184, 131)
  ); */
  background-color: transparent;
  
  box-shadow:inset 0 0 32px 16px rgb(53, 73, 94);
  border-radius: 8px;
}
</style>

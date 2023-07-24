<template>
  <div class="post mt-3 p-2 rounded">
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

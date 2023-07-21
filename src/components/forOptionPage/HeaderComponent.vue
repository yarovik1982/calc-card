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
          <img src="img/logo.png" alt="LOGO" width="25" />
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
</template>

<script>
export default {
   name:'header-component',
}
</script>
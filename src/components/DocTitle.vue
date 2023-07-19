<template>
  <div class="container-fluid">
    <h6 class="text-center" ref="text">Калькуляционная карта ({{title}})</h6>
  </div>
</template>

<script>
export default {
   props:{
      title:{
         type:String,
         default:'*'
      }
   }
}
</script>
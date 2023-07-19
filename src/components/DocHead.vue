<template>
  <div class="container-fluid">
    <form>
    <h6 class="text-center">Калькуляционная карта ({{title}})</h6>
      <div class="mb-1 w-25" >
        <input
          type="text"
          class="form-control form-control-sm"
          name="cardName"
          placeholder="Наименование блюда*"
          v-model="value"
          @input="updateTitle"
          ref="docHead"
        />
      </div>
      <div class="mb-1 w-25">
        <input
          type="text"
          class="form-control form-control-sm"
          name="cardDate"
          v-model="date"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
   name:'doc-head',
   props:{
      obj:{
         type:Object,
         required:true,
      }
   },
   data(){
      return{
         title:'*',
         value:'',
         date : '',
      }
   },
   methods:{
    updateTitle(){
      this.title = this.value
    }
  },
  mounted(){
   const today = new Date();
   const day = ("0" + today.getDate()).slice(-2);
   const month = ("0" + (today.getMonth() + 1)).slice(-2);
   const year = today.getFullYear();
   const hours = ("0" + today.getHours()).slice(-2);
   const minutes = ("0" + today.getMinutes()).slice(-2);
   const seconds = ("0" + today.getSeconds()).slice(-2);
   this.date = `${day}:${month}:${year} ${hours}:${minutes}:${seconds}`;
  }
};
</script>

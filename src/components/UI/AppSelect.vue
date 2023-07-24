<template>
  <select
    class="form-select form-select-sm  bg-primary text-light border-0"
    aria-label=".form-select-sm пример"
    style="width:15%; min-width:180px; text-overflow:ellipsis;"
    :v-model="modelValue"
    @change="changeOption"
  >
    <option disabled selected>Сортировать по</option>
    <option
      v-for="option in options"
      :key="option.value" 
      :value="option.value"
    >
      {{option.name}}
   </option>
    
  </select>
</template>
<script>
export default {
   name:'app-select',
  components: {},
  props:{
   modelValue:{
      type:String,
   },
   options:{
      type:Array,
      default:() => []
   },
  },
  data() {
    return {};
  },
  methods: {
   changeOption(event){
      this.$emit('update:modelValue', event.target.value)
   },
  },
};
</script>
<style></style>

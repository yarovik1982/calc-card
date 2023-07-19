import { createRouter, createWebHistory } from "vue-router";
const routes = [
   { 
      path:'/',
      name:'options',
      component:() => import('@/views/OptionsPage.vue')
   },
   {
      path:'/composition',
      name:'composition',
      component:() => import('@/views/CompositionPage.vue')
   },
   {},
   {},
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes
 })
 
 export default router
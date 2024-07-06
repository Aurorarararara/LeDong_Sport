import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/Login.vue";
import registered from "@/views/registered.vue";
import index from "@/Layout/index.vue";
import notice from "@/views/notice/notice.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/registered',
      name:'registered',
      component:registered
    },
    {
      path:'/index',
      name:'index',
      component:index
    },
    {
      path:'/notice',
      name:'notice',
      component:notice
    }
  ]
})

export default router

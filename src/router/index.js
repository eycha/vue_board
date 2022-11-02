import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import WriteView from '../views/WriteView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/board/detail/:seq',
    name:'Detail',
    component:DetailView
  },

  {
    path:'/board/write/:seq?',
    name:'Write',
    component:WriteView
  },
  // {
  //   path:'/board/write/:id?',
  //   name:'Write', 
  //   component:WriteView
  // }
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

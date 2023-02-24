import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"
import Brazil from '@/views/Brazil.vue'
import Jamaica from '@/views/Jamaica.vue'
import Hawaii from '@/views/Hawaii.vue'
import Panama from '@/views/Panama.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {path:'/brazil', name: 'brazil', component: Brazil},
  {path:'/jamaica', name: 'jamaica', component: Jamaica},
  {path:'/hawaii', name: 'hawaii', component: Hawaii},
  {path:'/panama', name: 'panama', component: Panama},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

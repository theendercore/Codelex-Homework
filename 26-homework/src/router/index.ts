import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/jokes",
      name: "jokes",
      component: () => import("../views/JokesView.vue")
    },
    {
      path:"/jokes/favorite",
      name:"favorite-jokes",
      component: () => import("../views/FavoriteJokeView.vue")

    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NotFoundView.vue")
    }
  ]
})

export default router

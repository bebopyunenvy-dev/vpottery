import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ArtWork from "../views/ArtWork.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/artwork",
    name: "ArtWork",
    component: ArtWork,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

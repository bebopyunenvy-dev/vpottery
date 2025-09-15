import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Artwork from "@/views/Artwork.vue";
import Contact from "@/views/Contact.vue";
const routes = [
  { path: "/", component: Home },
  { path: "/artwork", component: Artwork },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

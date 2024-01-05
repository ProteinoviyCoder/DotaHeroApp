import { createRouter, createWebHistory } from "vue-router";
import Main from "@/Pages/Main";
import HeroPage from "@/Pages/HeroPage";

const routes = [
  { path: "/DotaHeroApp", component: Main },
  { path: "/DotaHeroApp/hero/:id", component: HeroPage },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;

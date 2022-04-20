import MainPage from "@/components/MainPage";
import UserProfile from "@/components/UserProfile";
import WriteBook from "@/components/WriteBook";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/profile",
    component: UserProfile,
  },
  {
    path: "/write",
    component: WriteBook,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;

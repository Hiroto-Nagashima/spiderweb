import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
const TopPage = () => import("./components/Pages/TopPage.vue");
const TestPage = () => import("./components/Pages/TestPage.vue");
const WordPage = () => import("./components/Pages/WordPage.vue");
const NotFound = () => import("./components/Pages/NotFound.vue");

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: TopPage,
  },
  {
    path: "/words",
    component: WordPage,
  },
  {
    path: "/tests",
    component: TestPage,
  },
  {
    path: "/not-found",
    component: NotFound,
  },
  {
    path: "/*",
    component: NotFound,
    redirect: "/not-found",
  },
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
});

export default router;

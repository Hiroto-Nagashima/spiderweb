import Vue from "Vue";
import Router from "vue-router";

const TopPage = () => import("front/src/components/Pages/TopPage.vue");
const TestPage = () => import("front/src/components/Pages/TestPage.vue");
const WordPage = () => import("front/src/components/Pages/WordPage.vue");
const NotFound = () => import("front/src/components/Pages/NotFound.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      components: TopPage,
    },
    {
      path: "/words",
      components: WordPage,
    },
    {
      path: "/tests",
      components: TestPage,
    },
    {
      path: "*",
      redirect: NotFound,
    },
  ],
});

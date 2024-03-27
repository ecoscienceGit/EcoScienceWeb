import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Tutorials from "./pages/Tutorials.vue";
import Blog from "./pages/Blog.vue";
import About from "./pages/About.vue";
import Services from "./pages/Services.vue";
import RTMMR from "./pages/services/RTMMR.vue";

import Support from "./pages/Support.vue";
import PageNotFound from "./pages/PageNotFound.vue";
import Projects from "./pages/Projects.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  scrollBehavior(to) {
    if (to.hash) {
      window.scroll({ top: 0 });
    } else {
      document.querySelector("html").style.scrollBehavior = "auto";
      window.scroll({ top: 0 });
      document.querySelector("html").style.scrollBehavior = "";
    }
  },
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/services",
      component: Services,
    },
    {
      path: "/services/rtm-mr",
      component: RTMMR,
    },
    {
      path: "/:pathMatch(.*)*",
      component: PageNotFound,
    },
    {
      path: "/tutorials",
      component: Tutorials,
    },
    {
      path: "/blog",
      component: Blog,
    },
    {
      path: "/projects",
      component: Projects,
    },
    {
      path: "/support",
      component: Support,
    },
  ],
});

export default router;

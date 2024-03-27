import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Tutorials from "./pages/Tutorials.vue";
import Blog from "./pages/Blog.vue";
import BlogPost from "./pages/BlogPost.vue";
import About from "./pages/About.vue";
import Services from "./pages/Services.vue";
import Documentation from "./pages/Documentation.vue";
import Support from "./pages/Support.vue";
import ResetPassword from "./pages/ResetPassword.vue";
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
      component: Services,
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
    // {
    //   path: '/documentation',
    //   component: Documentation
    // },
    {
      path: "/support",
      component: Support,
    },
  ],
});

export default router;

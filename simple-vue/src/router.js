import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Blog from "./pages/Blog.vue";
import ProjectPost from "./pages/ProjectPost.vue";
import About from "./pages/About.vue";
import Services from "./pages/Services.vue";
import ServicePost from "./pages/ServicePost.vue";
import Download from "./pages/Download.vue";
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
      path: "/services-post/:serviceId",
      component: ServicePost,
      props: true,
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
      path: "/project-post/:projectId",
      component: ProjectPost,
      props: true,
    },
    // {
    //   path: "/download",
    //   component: Download,
    // },
    {
      path: "/:pathMatch(.*)*",
      component: PageNotFound,
    },
  ],
});

export default router;

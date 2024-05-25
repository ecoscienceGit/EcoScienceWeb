import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import News from "./pages/News.vue";
import ProjectPost from "./pages/ProjectPost.vue";
import About from "./pages/About.vue";
import Services from "./pages/Services.vue";
import ServicePost from "./pages/ServicePost.vue";
import ServiceCategory from "./pages/ServiceCategory.vue"
import PageNotFound from "./pages/PageNotFound.vue";
import Projects from "./pages/Projects.vue";
import Contacts from "./pages/Contacts.vue";

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
      path: "/services-category/:serviceType",
      component: ServiceCategory,
      props: true,
    },
    {
      path: "/services-post/:serviceId",
      component: ServicePost,
      props: true,
    },
    {
      path: "/News",
      component: News,
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
    {
      path: "/contacts",
      component:Contacts,
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

<template>
  <div
    class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip"
  >
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <!-- Page sections -->
      <component :is="currentPostComponent"></component>
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "./../partials/Header.vue";
import Guxian from "./../projects/guxian.vue";
import Competition from "./../projects/competition.vue";
import Wuliangsuhai from "./../projects/wuliangsuhai.vue";
import Nanshuibeidiao from "./../projects/nanshuibeidiao.vue";
import Yanxiban from "./../projects/yanxiban.vue";
import LearningWithUs from "./../projects/learningWithUs.vue";

import Footer from "./../partials/Footer.vue";

export default {
  name: "ProjectPost",
  components: {
    Header,
    Footer,
  },
  computed: {
    currentPostComponent() {
      const projectId = this.$route.params.projectId;
      switch (projectId) {
        case "guxian":
          return Guxian;
        case "wuliangsuhai":
          return Wuliangsuhai;
        case "nanshuibeidiao":
          return Nanshuibeidiao;
        case "yanxiban":
          return Yanxiban;
        case "competition":
          return Competition;
        case "learningWithUs":
          return LearningWithUs;
        // 根据项目ID返回对应的 PostSingle 组件
        default:
          return null; // 或默认组件
      }
    },
  },
};
</script>

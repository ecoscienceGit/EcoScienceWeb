<template>
  <div
    class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip"
  >
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "./../partials/Header.vue";
import ProjectsList from "./../partials/ProjectsList.vue";
import Footer from "./../partials/Footer.vue";

export default {
  name: "Projects",
  components: {
    Header,
    ProjectsList,
    Footer,
  },
};
</script>

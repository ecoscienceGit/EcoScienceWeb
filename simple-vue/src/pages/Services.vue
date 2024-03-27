<template>
  <div
    class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip"
  >
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
    <ServiceList />
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "./../partials/Header.vue";
import Footer from "./../partials/Footer.vue";
import ServiceList from "../partials/ServiceList.vue";

export default {
  name: "Projects",
  components: {
    Header,
    ServiceList,
    Footer,
  },
};
</script>

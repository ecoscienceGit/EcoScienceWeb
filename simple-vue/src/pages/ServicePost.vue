<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <component :is="currentServiceComponent"></component>

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import ServiceRTMMR from './../partials/services/ServiceRTMMR.vue'
import ServiceW2 from './../partials/services/ServiceW2.vue'
import ServiceDataPython from './../partials/services/ServiceDataPython.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'ServicePost',
  components: {
    Header,
    Footer,
  },
  computed: {
    currentServiceComponent() {
      const serviceId = this.$route.params.serviceId;
      switch (serviceId) {
        case "rtm-mr":
          return ServiceRTMMR;
        case "ce-qual-w2":
          return ServiceW2;
        case "data-python":
          return ServiceDataPython
        default:
          return null;
      }
    }
  }
}
</script>

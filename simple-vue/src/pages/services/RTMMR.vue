<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <ServiceRTMMR />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../../partials/Header.vue'
import ServiceRTMMR from './../../partials/services/ServiceRTMMR.vue'
import Footer from './../../partials/Footer.vue'

export default {
  name: 'RTMMR',
  components: {
    Header,
    ServiceRTMMR,
    Footer,
  },
}
</script>

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
import ServiceTypeSWM from './../partials/serviceType/ServiceTypeSWM.vue'
import ServiceTypeSWQ from './../partials/serviceType/ServiceTypeSWQ.vue'
import ServiceTypeSE from './../partials/serviceType/ServiceTypeSE.vue'
import ServiceTypeDT from './../partials/serviceType/ServiceTypeDT.vue'
import ServiceTypeAI from '../partials/serviceType/ServiceTypeAI.vue'
import ServiceTypeSME from '../partials/serviceType/ServiceTypeSME.vue'
// import ServiceTypeEC from './../partials/serviceType/ServiceTypeEC.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'ServicePost',
  components: {
    Header,
    Footer,
  },
  computed: {
    currentServiceComponent() {
      const serviceType = this.$route.params.serviceType;
      switch (serviceType) {
        case "smart-water-management":
          return ServiceTypeSWM;
        case "smart-water-quality":
          return ServiceTypeSWQ;
        case "smart-ecology":
          return ServiceTypeSE
        case "digital-twin":
          return ServiceTypeDT
        case "ai-transformation":
          return ServiceTypeAI
        case "social-media-ecology":
          return ServiceTypeSME
        // case "education-consulting":
        //   return ServiceTypeEC
        default:
          return null;
      }
    }
  }
}
</script>

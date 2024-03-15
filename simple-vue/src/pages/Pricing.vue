<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <PricingTables />
      <FeaturesTable />
      <TestimonialsCarousel />
      <Faqs />
      <Cta />       

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import PricingTables from './../partials/PricingTables.vue'
import FeaturesTable from './../partials/FeaturesTable.vue'
import TestimonialsCarousel from './../partials/TestimonialsCarousel.vue'
import Faqs from './../partials/Faqs.vue'
import Cta from './../partials/Cta.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'Pricing',
  components: {
    Header,
    PricingTables,
    FeaturesTable,
    TestimonialsCarousel,
    Faqs,
    Cta,
    Footer,
  },
}
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <h1>BlogList</h1>
      <BlogList />
      <h1>Career</h1>
      <Career />
      <h1>Carousel</h1>
      <Carousel />
      <h1>DocumentationContent</h1>
      <DocumentationContent />
      <h1>Faqs</h1>
      <Faqs />
      <h1>FeaturesBlocks</h1>
      <FeaturesBlocks />
      <h1>FeaturesWorld</h1>
      <FeaturesWorld />
      <h1>News</h1>
      <News />
      <h1>Newsletter</h1>
      <Newsletter />
      <h1>PostSingle</h1>
      <PostSingle />
      <h1>PricingTables</h1>
      <PricingTables />
      <h1>Process</h1>
      <Process />
      <h1>TestimonialsCarousel</h1>
      <TestimonialsCarousel />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import BlogList from './../partials/BlogList.vue'
import Career from './../partials/Career.vue'
import Carousel from './../partials/Carousel.vue'
import DocumentationContent from './../partials/DocumentationContent.vue'
import Faqs from './../partials/Faqs.vue'
import FeaturesBlocks from './../partials/FeaturesBlocks.vue'
import FeaturesWorld from './../partials/FeaturesWorld.vue'
import News from './../partials/News.vue'
import Newsletter from './../partials/Newsletter.vue'
import PostSingle from './../partials/PostSingle.vue'
import PricingTables from './../partials/PricingTables.vue'
import Process from './../partials/Process.vue'
import TestimonialsCarousel from './../partials/TestimonialsCarousel.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'Tutorials',
  components: {
    Header,
    BlogList,
    Career,
    Carousel,
    DocumentationContent, 
    Faqs,
    FeaturesBlocks,
    FeaturesWorld,
    News,
    Newsletter,
    PostSingle,
    PricingTables,
    Process,
    TestimonialsCarousel,
    Footer,
  },
}
</script>

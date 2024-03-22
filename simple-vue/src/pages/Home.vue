<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <HeroHome />
      <!-- <FeaturesAbout /> -->
      <FeaturesServices />
      <!-- <FeaturesWorld /> -->
      <FeaturesProjects />
      <FeaturesBlog />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import Carousel from './../partials/Carousel.vue'
import HeroHome from './../partials/HeroHome.vue'
import FeaturesAbout from './../partials/FeaturesAbout.vue'
import FeaturesServices from './../partials/FeaturesServices.vue'
import FeaturesWorld from './../partials/FeaturesWorld.vue'
import FeaturesProjects from './../partials/FeaturesProjects.vue'
import FeaturesBlog from './../partials/FeaturesBlog.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Carousel,
    HeroHome,
    FeaturesAbout,
    FeaturesServices,
    FeaturesProjects,
    FeaturesBlog,
    FeaturesWorld,
    Footer,
  },
}
</script>

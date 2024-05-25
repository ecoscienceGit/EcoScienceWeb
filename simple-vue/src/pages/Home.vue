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
      <FeaturesNews />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import HeroHome from './../partials/HeroHome.vue'
import FeaturesServices from './../partials/FeaturesServices.vue'
import FeaturesProjects from './../partials/FeaturesProjects.vue'
import FeaturesNews from './../partials/FeaturesNews.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    HeroHome,
    FeaturesServices,
    FeaturesProjects,
    FeaturesNews,
    Footer,
  },
}
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <AboutIntro />
      <AboutStory />
      <AboutStats />
    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import AboutIntro from './../partials/AboutIntro.vue'
import AboutStory from './../partials/AboutStory.vue'
import AboutStats from './../partials/AboutStats.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'About',
  components: {
    Header,
    AboutIntro,
    AboutStory,
    AboutStats,
    Footer,
  },
}
</script>

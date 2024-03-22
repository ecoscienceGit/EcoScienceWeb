<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <TutorialsList />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import BlogList from './../partials/BlogList.vue'
import TutorialsList from './../partials/TutorialsList.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'Blog',
  components: {
    Header,
    BlogList,
    TutorialsList,
    Footer,
  },
}
</script>

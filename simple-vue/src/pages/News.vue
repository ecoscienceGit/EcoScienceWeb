<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <NewsList />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import NewsList from './../partials/NewsList.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'News',
  components: {
    Header,
    NewsList,
    Footer,
  },
}
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <DownloadList />
    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import DownloadList from './../partials/DownloadList.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'Features',
  components: {
    Header,
    DownloadList,
    Footer,
  },
}
</script>

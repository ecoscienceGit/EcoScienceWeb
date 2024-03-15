<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <PostSingle />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import PostSingle from './../partials/PostSingle.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'BlogPost',
  components: {
    Header,
    PostSingle,
    Footer,
  },
}
</script>

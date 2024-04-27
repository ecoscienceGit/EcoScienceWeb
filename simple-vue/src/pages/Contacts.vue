<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Page sections -->
      <ContactsList />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import ContactsList from './../partials/ContactsList.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'Contacts',
  components: {
    Header,
    ContactsList,
    Footer,
  },
}
</script>

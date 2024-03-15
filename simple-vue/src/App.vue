<template>
  <router-view />
</template>

<script>
import AOS from 'aos'

export default {
  mounted() {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })   
  }
}
</script>


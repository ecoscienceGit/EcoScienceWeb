<template>
  <section class="relative">

    <!-- Illustration behind hero content -->
    <div class="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
      <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
            <stop stop-color="#FFF" offset="0%" />
            <stop stop-color="#EAEAEA" offset="77.402%" />
            <stop stop-color="#DFDFDF" offset="100%" />
          </linearGradient>
        </defs>
        <g fill="url(#illustration-01)" fill-rule="evenodd">
          <circle cx="1232" cy="128" r="128" />
          <circle cx="155" cy="443" r="64" />
        </g>
      </svg>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Hero content -->
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">

        <!-- Section header -->
        <div class="text-center pb-12 md:pb-16">
          <h1 class="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"><span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">{{ $t('slogan') }}</span></h1>
          <div class="max-w-3xl mx-auto">
            <p class="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">{{ $t('companyIntro') }}</p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroHome',
}
</script>
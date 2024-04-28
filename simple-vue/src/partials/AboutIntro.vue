<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">

        <!-- Section header -->
        <div class="max-w-6xl mx-auto text-left pb-12 md:pb-16">
          <h1 class="h1 mb-4">{{ $t('about.title') }}</h1>
          <p class="text-xl text-gray-600">
            {{ $t('companyIntro') + ' ' + $t('about.companyGoal') }}
          </p>
        </div>

        <figure class="flex justify-center items-start">
          <img class="rounded shadow-2xl" src="../images/about-01.jpg" width="768" height="432" alt="About us 01" />
        </figure>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutIntro',
}
</script>
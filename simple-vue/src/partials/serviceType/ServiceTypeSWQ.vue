<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">

        <!-- Page header -->
        <div class="max-w-3xl pb-8 md:pb-8 text-center md:text-left">
          <h1 class="h1">{{ $t('services.smartWaterQuality.title') }}</h1>
        </div>

        <p class="text-xl text-gray-600 mb-8">{{ $t('services.smartWaterQuality.intro') }}</p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 md:py-12 border-t border-gray-200">
          <figure class="lg:col-span-1 mb-8 mx-8">
            <img class="w-full rounded" src="../../images/swq-05.jpg" width="768" height="432" alt="swq 05" />
          </figure>
          <div class="lg:col-span-1 pb-8 md:pb-8 text-center md:text-left">
            <h4 class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">{{ $t('services.smartWaterQuality.models.w2.title') }}</h4>
            <p class="text-gray-600 mb-8">{{ $t('services.smartWaterQuality.models.w2.content') }}</p>
            <router-link 
                to="/services-post/ce-qual-w2" 
                class="text-blue-600 hover:text-blue-500">
                {{ $t('learnMore') }}
            </router-link>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 md:py-12 border-t border-gray-200">
          <div class="lg:col-span-1 pb-8 md:pb-8 text-center md:text-left">
            <h4 class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">{{ $t('services.smartWaterQuality.models.pollutants.title') }}</h4>
            <p class="text-gray-600 mb-8">{{ $t('services.smartWaterQuality.models.pollutants.content') }}</p>
          </div>
          <figure class="lg:col-span-1 mb-8 mx-8">
            <img class="w-full rounded" src="../../images/swq-01.jpg" width="768" height="432" alt="swq 01" />
          </figure>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 md:py-12 border-t border-gray-200">
          <figure class="lg:col-span-1 mb-8 mx-8">
            <img class="w-full rounded" src="../../images/swq-02.jpg" width="768" height="432" alt="swq 02" />
          </figure>
          <div class="lg:col-span-1 pb-8 md:pb-8 text-center md:text-left">
            <h4 class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">{{ $t('services.smartWaterQuality.models.Algae.title') }}</h4>
            <p class="text-gray-600 mb-8">{{ $t('services.smartWaterQuality.models.Algae.content') }}</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 md:py-12 border-t border-gray-200">
          <div class="lg:col-span-1 pb-8 md:pb-8 text-center md:text-left">
            <h4 class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">{{ $t('services.smartWaterQuality.models.Nutrient.title') }}</h4>
            <p class="text-gray-600 mb-8">{{ $t('services.smartWaterQuality.models.Nutrient.content') }}</p>
            <!-- <router-link 
              to="/services-post/rtm-mr" 
              class="text-blue-600 hover:text-blue-500">
              {{ $t('learnMore') }}</router-link> -->
          </div>
          <figure class="lg:col-span-1 mb-8 mx-8">
            <img class="w-full rounded" src="../../images/swq-03.jpg" width="768" height="432" alt="swq 03" />
          </figure>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 md:py-12 border-t border-gray-200">
          <figure class="lg:col-span-1 mb-8 mx-8">
            <img class="w-full rounded" src="../../images/swq-04.jpg" width="768" height="432" alt="swq 04" />
          </figure>
          <div class="lg:col-span-1 pb-8 md:pb-8 text-center md:text-left">
            <h4 class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">{{ $t('services.smartWaterQuality.models.Gases.title') }}</h4>
            <p class="text-gray-600 mb-8">{{ $t('services.smartWaterQuality.models.Gases.content') }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiceTypeSWQ',
}
</script>
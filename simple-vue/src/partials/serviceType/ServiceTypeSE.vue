<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">

        <!-- Page header -->
        <div class="max-w-3xl pb-8 md:pb-8 text-center md:text-left">
          <h1 class="h1">{{ $t('services.smartEcology.title') }}</h1>
        </div>

        <p class="text-xl text-gray-600 mb-8">{{ $t('services.smartEcology.Artificial.title') + "; " + $t('services.smartEcology.Ecology.title') + "; " + $t('services.smartEcology.Combustion.title') }}</p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 md:py-12 border-t border-gray-200">
          <div class="lg:col-span-1 pb-8 md:pb-8 text-center md:text-left">
            <h4 class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">{{ $t('services.smartEcology.Artificial.Ecosystem.title') }}</h4>
            <p class="text-gray-600 mb-8">{{ $t('services.smartEcology.Artificial.Ecosystem.content') }}</p>
            <router-link 
                to="/services-post/global-database" 
                class="text-blue-600 hover:text-blue-500">
                {{ $t('learnMore') }}
            </router-link>
          </div>
          <figure class="lg:col-span-1 mb-8 mx-8">
            <img class="w-full rounded" src="../../images/se-01.jpg" width="768" height="432" alt="se 01" />
          </figure>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 md:py-12 border-t border-gray-200">
          <figure class="lg:col-span-1 mb-8 mx-8">
            <img class="w-full rounded" src="../../images/se-02.jpg" width="768" height="432" alt="se 02" />
          </figure>
          <div class="lg:col-span-1 pb-8 md:pb-8 text-center md:text-left">
            <h4 class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">{{ $t('services.smartEcology.Artificial.Lakes.title') }}</h4>
            <p class="text-gray-600 mb-8">{{ $t('services.smartEcology.Artificial.Lakes.content') }}</p>
            <router-link 
                to="/services-post/global-database" 
                class="text-blue-600 hover:text-blue-500">
                {{ $t('learnMore') }}
            </router-link>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 md:py-12 border-t border-gray-200">
          <div class="lg:col-span-1 pb-8 md:pb-8 text-center md:text-left">
            <h4 class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">{{ $t('services.smartEcology.Artificial.ML.title') }}</h4>
            <p class="text-gray-600 mb-8">{{ $t('services.smartEcology.Artificial.ML.content') }}</p>
            <router-link 
                to="/services-post/data-python" 
                class="text-blue-600 hover:text-blue-500">
                {{ $t('learnMore') }}
            </router-link>
          </div>
          <figure class="lg:col-span-1 mb-8 ml-8">
            <img class="w-full rounded" src="../../images/se-03.jpg" width="768" height="432" alt="se 03" />
          </figure>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 md:py-12 border-t border-gray-200">
          <figure class="lg:col-span-1 mb-8 mx-8">
            <img class="w-full rounded" src="../../images/se-04.jpg" width="768" height="432" alt="se 04" />
          </figure>
          <div class="lg:col-span-1 pb-8 md:pb-8 text-center md:text-left">
            <h4 class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">{{ $t('services.smartEcology.Ecology.title') }}</h4>
            <p class="text-gray-600 mb-8">{{ $t('services.smartEcology.Ecology.content') }}</p>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 md:py-12 border-t border-gray-200">
          <div class="lg:col-span-1 pb-8 md:pb-8 text-center md:text-left">
            <h4 class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">{{ $t('services.smartEcology.Combustion.title') }}</h4>
            <p class="text-gray-600 mb-8">{{ $t('services.smartEcology.Combustion.content') }}</p>
          </div>
          <figure class="lg:col-span-1 mb-8 mx-8">
            <img class="w-full rounded" src="../../images/se-05.jpg" width="768" height="432" alt="se 05" />
          </figure>
        </div>


      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiceTypeSE',
}
</script>
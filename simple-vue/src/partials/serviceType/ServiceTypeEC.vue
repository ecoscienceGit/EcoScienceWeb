<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">

        <!-- Page header -->
        <div class="max-w-3xl pb-8 md:pb-8 text-center md:text-left">
          <h1 class="h1">{{ $t('services.educationConsulting.title') }}</h1>
        </div>

        <p class="text-xl text-gray-600 mb-8">{{ $t('services.educationConsulting.apply.title') + "; " + $t('services.educationConsulting.writing.title') }}</p>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 md:py-12 border-t border-gray-200">
          <div class="lg:col-span-1 pb-8 md:pb-8 text-center md:text-left">
            <h4 class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">{{ $t('services.educationConsulting.apply.title') }}</h4>
            <p class="text-gray-600 mb-8">{{ $t('services.educationConsulting.apply.content') }}</p>
            <router-link 
                to="/project-post/learningWithUs" 
                class="text-blue-600 hover:text-blue-500">
                {{ $t('learnMore') }}
            </router-link>
          </div>
          <figure class="lg:col-span-1 mb-8 ml-8">
            <img class="w-full rounded" src="../../images/ec-01.jpg" width="768" height="432" alt="ec 01" />
          </figure>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 md:py-12 border-t border-gray-200">
          <figure class="lg:col-span-1 mb-8 mr-8">
            <img class="w-full rounded" src="../../images/ec-02.jpg" width="768" height="432" alt="ec 02" />
          </figure>
          <div class="lg:col-span-1 pb-8 md:pb-8 text-center md:text-left">
            <h4 class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">{{ $t('services.educationConsulting.writing.title') }}</h4>
            <p class="text-gray-600 mb-8">{{ $t('services.educationConsulting.writing.content') }}</p>
            <router-link 
                to="/project-post/learningWithUs" 
                class="text-blue-600 hover:text-blue-500">
                {{ $t('learnMore') }}
            </router-link>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiceTypeEC',
}
</script>
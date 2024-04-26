<template>
  <section>
    <div class="max-w-5xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pb-20">

        <div class="max-w-3xl mx-auto">
          <h3 class="h3 mb-3">{{ $t('about.companyProfile') }}</h3>
          <p class="text-lg text-gray-600 mb-8">
            {{ $t('about.team') }}
          </p>
          
        </div>

        <div class="sm:flex">
          <figure class="flex shrink-0 max-w-none sm:max-w-xs lg:max-w-none mb-8 sm:mb-0">
            <img class="grow self-start rounded" src="../images/about-02.png" width="435" height="326" alt="About us 02" />
          </figure>
          <div class="sm:ml-8 lg:ml-16">
            <p class="text-lg text-gray-600 mb-8">
              {{ $t('about.focus') }}
            </p> 
            <p class="text-lg text-gray-600 mb-8">
              {{ $t('about.story') }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutStory',
}
</script>
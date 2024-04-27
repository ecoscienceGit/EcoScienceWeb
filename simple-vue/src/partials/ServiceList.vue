<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="max-w-3xl mx-auto lg:max-w-none">

          <article>

            <!-- Article header -->
            <header class="max-w-6xl mx-auto mb-20">
              <!-- Title -->
              <h1 class="h1 text-left mb-4">{{ $t('services') }}</h1>
            </header>

            <div class="max-w-sm mx-auto md:max-w-none">

              <!-- Services container -->
              <div class="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">

                <!-- 1st service type --> 
                <article class="block flex flex-col h-full">
                  <header>
                    <router-link to="/services-category/smart-water-management"  class="block mb-6">
                      <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                        <img class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" src="../images/swm-01.jpg" width="352" height="198" alt="Swm 01" />
                      </figure>
                    </router-link>
                    <h3 class="text-xl font-bold leading-snug tracking-tight mb-2">
                      <router-link to="/services-category/smart-water-management" class="hover:underline">{{ $t('services.smartWaterManagement') }}</router-link>
                    </h3>
                  </header>
                  <p class="text-gray-600 grow">{{ $t('services.smartWaterManagement.models') }}</p>
                </article>

                <!-- 2nd article -->
                <article class="block flex flex-col h-full">
                  <header>
                    <router-link to="/services-category/smart-water-quality"  class="block mb-6">
                      <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                        <img class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" src="../images/tutorial-01.jpg" width="352" height="198" alt="News 01" />
                      </figure>
                    </router-link>
                    <h3 class="text-xl font-bold leading-snug tracking-tight mb-2">
                      <router-link to="/services-category/smart-water-quality" class="hover:underline">{{ $t('services.smartWaterQuality') }}</router-link>
                    </h3>
                  </header>
                  <p class="text-gray-600 grow">{{ $t('services.smartWaterQuality.models') }}</p>
                </article>

                <!-- 3rd article -->
                <article class="block flex flex-col h-full">
                  <header>
                    <router-link to="/services-category/smart-ecology"  class="block mb-6">
                      <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                        <img class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" src="../images/tutorial-01.jpg" width="352" height="198" alt="News 01" />
                      </figure>
                    </router-link>
                    <h3 class="text-xl font-bold leading-snug tracking-tight mb-2">
                      <router-link to="/services-category/smart-ecology" class="hover:underline">{{ $t('services.smartEcology') }}</router-link>
                    </h3>
                  </header>
                  <p class="text-gray-600 grow">{{ $t('services.smartEcology.Artificial') + '; ' + $t('services.smartEcology.Ecology') + '; ' + $t('services.smartEcology.Combustion') }}</p>
                </article>
                
                <!-- 4th article -->
                <article class="block flex flex-col h-full">
                  <header>
                    <router-link to="/services-category/digital-twin"  class="block mb-6">
                      <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                        <img class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" src="../images/tutorial-01.jpg" width="352" height="198" alt="News 01" />
                      </figure>
                    </router-link>
                    <h3 class="text-xl font-bold leading-snug tracking-tight mb-2">
                      <router-link to="/services-category/digital-twin" class="hover:underline">{{ $t('services.digitalTwin') }}</router-link>
                    </h3>
                  </header>
                  <p class="text-gray-600 grow">{{ $t('services.digitalTwin.systems') + '; ' + $t('services.digitalTwin.cloud') }}</p>
                </article>

                <!-- 5th article -->
                <article class="block flex flex-col h-full">
                  <header>
                    <router-link to="/services-category/education-consulting"  class="block mb-6">
                      <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                        <img class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" src="../images/tutorial-01.jpg" width="352" height="198" alt="News 01" />
                      </figure>
                    </router-link>
                    <h3 class="text-xl font-bold leading-snug tracking-tight mb-2">
                      <router-link to="/services-category/education-consulting" class="hover:underline">{{ $t('services.educationConsulting') }}</router-link>
                    </h3>
                  </header>
                  <p class="text-gray-600 grow">{{ $t('') }}</p>
                </article>
                
              </div>

            </div>

          </article>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiceList',
  data() {
    return {
      openTab: 1
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
}
</script>
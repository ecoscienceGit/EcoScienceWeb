<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="max-w-3xl mx-auto lg:max-w-none">

          <article>

            <!-- Article header -->
            <header class="max-w-5xl mx-auto mb-20">
              <!-- Title -->
              <h2 class="h2 text-center mb-4">{{ $t('servicePosts.digitalTwin.title') }}</h2>
            </header>

            <!-- Article content -->
            <div class="lg:flex lg:justify-between">
              <!-- Main content -->
              <div>
                <!-- Article body -->
                <div class="text-lg text-gray-600">
                  <p class='mb-8' v-html="$t('servicePosts.digitalTwin.intro')"></p>
                  
                  <h4 class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">{{ $t('servicePosts.digitalTwin.s1.title') }}</h4>
                  <ul class="max-w-6xl mx-auto mb-8 pl-12 text-gray-900">
                    <Accordion :title="$t('servicePosts.digitalTwin.s1.Accordion.a1.title')">
                      {{ $t('servicePosts.digitalTwin.s1.Accordion.a1.content') }}
                    </Accordion>
                    <Accordion :title="$t('servicePosts.digitalTwin.s1.Accordion.a2.title')">
                      {{ $t('servicePosts.digitalTwin.s1.Accordion.a2.content') }}
                    </Accordion>
                    <Accordion :title="$t('servicePosts.digitalTwin.s1.Accordion.a3.title')">
                      {{ $t('servicePosts.digitalTwin.s1.Accordion.a3.content') }}
                    </Accordion>
                    <Accordion :title="$t('servicePosts.digitalTwin.s1.Accordion.a4.title')">
                      {{ $t('servicePosts.digitalTwin.s1.Accordion.a4.content') }}
                    </Accordion>
                    <span class="block border-t border-gray-200" aria-hidden="true"></span>
                  </ul>

                  <h4 class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">{{ $t('servicePosts.digitalTwin.s2.title') }}</h4>
                  <div v-html="$t('servicePosts.digitalTwin.s2.content')"></div>

                  <h4 class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">{{ $t('servicePosts.digitalTwin.s3.title') }}</h4>
                  <div v-html="$t('servicePosts.digitalTwin.s3.content')"></div>
                  
                  <h4 class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">{{ $t('servicePosts.digitalTwin.s4.title') }}</h4>
                  <div v-html="$t('servicePosts.digitalTwin.s4.content')"></div>
                  
                </div>
              </div>
            </div>
          </article>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
import Accordion from './../../utils/Accordion.vue'

export default {
  name: 'ServiceDigitalTwinSystem',
  components: {
    Accordion,
  },
}
</script>
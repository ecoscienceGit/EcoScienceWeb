<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="max-w-3xl mx-auto lg:max-w-none">

          <article>

            <!-- Article header -->
            <header class="max-w-6xl mx-auto mb-20">
              <!-- Title -->
              <h2 class="h2 text-left mb-4">{{ $t('servicePosts.dataProcessing.title') }}</h2>
            </header>

            <!-- Article content -->
            <div class="lg:flex lg:justify-between">

              <!-- Main content -->
              <div>

                <!-- Article body -->
                <div class="text-lg text-gray-600">
                  <p class='mb-8' v-html="$t('servicePosts.dataProcessing.intro')"></p>

                  <h4 id="advantages" class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">{{ $t('servicePosts.dataProcessing.s1.title') }}</h4>
                  <div v-html="$t('servicePosts.dataProcessing.s1.content')"></div>

                  <h4 id="applications" class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">{{ $t('servicePosts.dataProcessing.s2.title') }}</h4>
                  <div v-html="$t('servicePosts.dataProcessing.s2.content')"></div>

                  <h4 id="applications" class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">{{ $t('servicePosts.dataProcessing.s3.title') }}</h4>
                  <div v-html="$t('servicePosts.dataProcessing.s3.content')"></div>

                  <h4 id="applications" class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">{{ $t('servicePosts.dataProcessing.s4.title') }}</h4>
                  <div v-html="$t('servicePosts.dataProcessing.s4.content')"></div>
                  
                  <hr class="w-full h-px pt-px mt-8 bg-gray-200 border-0" />
                    <div class="mt-8 text-sm" v-html="$t('servicePosts.dataProcessing.footer')"></div>

                </div>

              </div>

            </div>

            <!-- Article footer -->
          </article>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServiceDataPython',
}
</script>
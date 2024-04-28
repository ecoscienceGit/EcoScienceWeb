<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">

        <!-- Page header -->
        <div class="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
          <h1 class="h1">{{ $t('news.title') }}</h1>
        </div>

        <!-- Section tags -->
        <div class="border-b border-gray-300 pb-4 mb-12">
          <ul class="flex flex-wrap justify-center md:justify-start font-medium -mx-5 -my-1">
            <li class="mx-5 my-1">
              <a v-on:click="toggleTabs(0)" v-bind:class="{'text-gray-800 hover:underline': openTab !== 0, 'text-blue-600': openTab === 0}">{{ $t('news.title') }}</a>
            </li>
            <li class="mx-5 my-1">
              <a v-on:click="toggleTabs(1)" v-bind:class="{'text-gray-800 hover:underline': openTab !== 1, 'text-blue-600': openTab === 1}">{{ $t('news.career') }}</a>
            </li>
            <li class="mx-5 my-1">
              <a v-on:click="toggleTabs(2)" v-bind:class="{'text-gray-800 hover:underline': openTab !== 2, 'text-blue-600': openTab === 2}">{{ $t('news.academicConferences') }}</a>
            </li>
            <li class="mx-5 my-1">
              <a v-on:click="toggleTabs(3)" v-bind:class="{'text-gray-800 hover:underline': openTab !== 3, 'text-blue-600': openTab === 3}">{{ $t('news.training') }}</a>
            </li>
          </ul>
        </div>

        <!-- Articles list -->
        <div class="max-w-sm mx-auto md:max-w-none">

          <!-- Articles container -->
          <div class="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">

            <article v-bind:class="{'hidden': !(openTab === 0 || openTab === 3), 'block flex flex-col h-full': openTab === 0 || openTab === 3}">
              <header>
                <a href="https://mp.weixin.qq.com/s?__biz=Mzg2NjkwNzU1Nw==&mid=2247485114&idx=1&sn=766302a0af17eccec95645f145485a7f&chksm=ce42e270f9356b66fae534e1add565bee10fd232db46137a34d6c24db0f8c1abdb042465c08c&token=2005173252&lang=zh_CN#rd" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" src="../images/news-tutorialZZ.png" width="352" height="198" alt="News ZhengZhou Tutorial" />
                  </figure>
                </a>
                <h3 class="text-xl font-bold leading-snug tracking-tight mb-2">
                  <a href="https://mp.weixin.qq.com/s?__biz=Mzg2NjkwNzU1Nw==&mid=2247485114&idx=1&sn=766302a0af17eccec95645f145485a7f&chksm=ce42e270f9356b66fae534e1add565bee10fd232db46137a34d6c24db0f8c1abdb042465c08c&token=2005173252&lang=zh_CN#rd" class="hover:underline">{{ $t('news.tutorialZZ.title') }}</a>
                </h3>
              </header>
              <p class="text-gray-600 grow">{{ $t('news.tutorialZZ.summary') }}</p>
              <footer class="text-sm flex items-center mt-4">
                <div>
                  <span class="text-gray-600">{{ $t('news.tutorialZZ.date') }}</span>
                </div>
              </footer>
            </article>

            <article v-bind:class="{'hidden': !(openTab === 0), 'block flex flex-col h-full': openTab === 0}">
              <header>
                <a href="https://mp.weixin.qq.com/s?__biz=Mzg2NjkwNzU1Nw==&mid=2247485072&idx=1&sn=b29b7e1816cc2e1c45083c3373bf4d0a&chksm=ce42e25af9356b4ca659ac23fd7564bc3fdf9fe94c8304c181015d0c92729f2f876544c1bff4&token=2005173252&lang=zh_CN#rd" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" src="../images/w2UIv1.png" width="352" height="198" alt="News w2 UI v1.0" />
                  </figure>
                </a>
                <h3 class="text-xl font-bold leading-snug tracking-tight mb-2">
                  <a href="https://mp.weixin.qq.com/s?__biz=Mzg2NjkwNzU1Nw==&mid=2247485072&idx=1&sn=b29b7e1816cc2e1c45083c3373bf4d0a&chksm=ce42e25af9356b4ca659ac23fd7564bc3fdf9fe94c8304c181015d0c92729f2f876544c1bff4&token=2005173252&lang=zh_CN#rd" class="hover:underline">{{ $t('news.w2UIv1.title') }}</a>
                </h3>
              </header>
              <p class="text-gray-600 grow">{{ $t('news.w2UIv1.summary') }}</p>
              <footer class="text-sm flex items-center mt-4">
                <div>
                  <span class="text-gray-600">{{ $t('news.w2UIv1.date') }}</span>
                </div>
              </footer>
            </article>

            <article v-bind:class="{'hidden': !(openTab === 0), 'block flex flex-col h-full': openTab === 0}">
              <header>
                <a href="https://mp.weixin.qq.com/s/szZ6POtcMg2pQyEoT3-0pA" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" src="../images/tutorial-02.jpg" width="352" height="198" alt="News 02" />
                  </figure>
                </a>
                <h3 class="text-xl font-bold leading-snug tracking-tight mb-2">
                  <a href="https://mp.weixin.qq.com/s/szZ6POtcMg2pQyEoT3-0pA" class="hover:underline">{{ $t('news.sum23.title') }}</a>
                </h3>
              </header>
              <p class="text-gray-600 grow">{{ $t('news.sum23.summary') }}</p>
              <footer class="text-sm flex items-center mt-4">
                <div>
                  <span class="text-gray-600">{{ $t('news.sum23.date') }}</span>
                </div>
              </footer>
            </article>
            
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogList',
  data() {
    return {
      openTab: 0
    }
  },
  methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber;
      console.log(this.openTab);
    }
  }
}
</script>
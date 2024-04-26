<template>
  <section class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">

        <!-- Page header -->
        <div class="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
          <h1 class="h1">{{ $t('blog') }}</h1>
        </div>

        <!-- Section tags -->
        <div class="border-b border-gray-300 pb-4 mb-12">
          <ul class="flex flex-wrap justify-center md:justify-start font-medium -mx-5 -my-1">
            <li class="mx-5 my-1">
              <a v-on:click="toggleTabs(0)" v-bind:class="{'text-gray-800 hover:underline': openTab !== 0, 'text-blue-600': openTab === 0}">全部</a>
            </li>
            <li class="mx-5 my-1">
              <a v-on:click="toggleTabs(1)" v-bind:class="{'text-gray-800 hover:underline': openTab !== 1, 'text-blue-600': openTab === 1}">{{ $t('blog') }}</a>
            </li>
            <li class="mx-5 my-1">
              <a v-on:click="toggleTabs(2)" v-bind:class="{'text-gray-800 hover:underline': openTab !== 2, 'text-blue-600': openTab === 2}">{{ $t('blog.internshipRecruitment') }}</a>
            </li>
            <li class="mx-5 my-1">
              <a v-on:click="toggleTabs(3)" v-bind:class="{'text-gray-800 hover:underline': openTab !== 3, 'text-blue-600': openTab === 3}">{{ $t('blog.academicConferences') }}</a>
            </li>
            <li class="mx-5 my-1">
              <a v-on:click="toggleTabs(4)" v-bind:class="{'text-gray-800 hover:underline': openTab !== 4, 'text-blue-600': openTab === 4}">{{ $t('blog.relatedTraining') }}</a>
            </li>
          </ul>
        </div>

        <!-- Articles list -->
        <div class="max-w-sm mx-auto md:max-w-none">

          <!-- Articles container -->
          <div class="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">

            <!-- 1st article -->
            <!-- <article data-aos="zoom-y-out" v-bind:class="{'hidden': openTab !== 0, 'block flex flex-col h-full': openTab === 0}"> -->
            <article v-bind:class="{'hidden': !(openTab === 0 || openTab === 4), 'block flex flex-col h-full': openTab === 0 || openTab === 4}">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" src="../images/tutorial-01.jpg" width="352" height="198" alt="News 01" />
                  </figure>
                </router-link>
                <h3 class="text-xl font-bold leading-snug tracking-tight mb-2">
                  <router-link to="/blog-post" class="hover:underline">第三期全国CE-QUAL-W2研习班圆满结束！</router-link>
                </h3>
              </header>
              <p class="text-gray-600 grow">2023年7月15日-19日，在武汉举办的初阶（3天）及高阶（2天）水环境模型研习班圆满结束。</p>
              <footer class="text-sm flex items-center mt-4">
                <div>
                  <span class="text-gray-600">2023年8月12日</span>
                </div>
              </footer>
            </article>

            <!-- 2nd article -->
            <!-- <article class="block flex flex-col h-full" data-aos="zoom-y-out" data-aos-delay="150"> -->
            <article v-bind:class="{'hidden': !(openTab === 0 || openTab === 1), 'block flex flex-col h-full': openTab === 0 || openTab === 1}">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" src="../images/tutorial-02.jpg" width="352" height="198" alt="News 02" />
                  </figure>
                </router-link>
                <h3 class="text-xl font-bold leading-snug tracking-tight mb-2">
                  <router-link to="/blog-post" class="hover:underline">思益清源2023上半年总结</router-link>
                </h3>
              </header>
              <p class="text-gray-600 grow">亲爱的读者朋友们，回顾过去的半年，陕西思益清源科技有限公司在科研和合作领域取得了令人瞩目的成绩！让我们一起来看看我们的主要亮点和成就……</p>
              <footer class="text-sm flex items-center mt-4">
                <div>
                  <span class="text-gray-600">2023年7月1日</span>
                </div>
              </footer>
            </article>

            <!-- 3rd article -->
            <!-- <article class="flex flex-col h-full" data-aos="zoom-y-out" data-aos-delay="300"> -->
            <article v-bind:class="{'hidden': !(openTab === 0 || openTab === 2), 'block flex flex-col h-full': openTab === 0 || openTab === 2}">
              <header>
                <router-link to="/blog-post" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" src="../images/tutorial-02.jpg" width="352" height="198" alt="News 02" />
                  </figure>
                </router-link>
                <h3 class="text-xl font-bold leading-snug tracking-tight mb-2">
                  <router-link to="/blog-post" class="hover:underline">思益清源2023上半年总结</router-link>
                </h3>
              </header>
              <p class="text-gray-600 grow">亲爱的读者朋友们，回顾过去的半年，陕西思益清源科技有限公司在科研和合作领域取得了令人瞩目的成绩！让我们一起来看看我们的主要亮点和成就……</p>
              <footer class="text-sm flex items-center mt-4">
                <div>
                  <span class="text-gray-600">2023年7月1日</span>
                </div>
              </footer>
            </article>

            <!-- 4th article -->
           

            <!-- 5th article -->
            

            <!-- 6th article -->
            

            <!-- 7th article -->
  

            <!-- 8th article -->
            

            <!-- 9th article -->
            
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
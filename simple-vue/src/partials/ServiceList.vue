<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="max-w-3xl mx-auto lg:max-w-none">

          <article>

            <!-- Article header -->
            <header class="max-w-6xl mx-auto mb-20">
              <!-- Title -->
              <h1 class="h1 text-left mb-4">业务范围</h1>
            </header>

            <!-- Article content -->
            <div class="lg:flex lg:justify-between">

              <!-- Sidebar -->
              <aside class="relative lg:block w-48 mr-16 mb-8 shrink-0">
                <div class="sticky top-28">
                  <ul class="text-lg -my-1">
                    <li class="py-1 mb-4">
                      <a v-on:click="toggleTabs(1)" v-bind:class="{'flex items-center text-gray-600 hover:text-blue-600': openTab !== 1, 'flex items-center text-blue-600': openTab === 1}">
                        <svg class="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                        </svg>
                        <span>智慧水利</span>
                      </a>
                    </li>
                    <li class="py-1 mb-4">
                      <a v-on:click="toggleTabs(2)" v-bind:class="{'flex items-center text-gray-600 hover:text-blue-600': openTab !== 2, 'flex items-center text-blue-600': openTab === 2}">
                        <svg class="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                        </svg>
                        <span>智慧水质</span>
                      </a>
                    </li>
                    <li class="py-1 mb-4">
                      <a v-on:click="toggleTabs(3)" v-bind:class="{'flex items-center text-gray-600 hover:text-blue-600': openTab !== 3, 'flex items-center text-blue-600': openTab === 3}">
                        <svg class="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                        </svg>
                        <span>智慧生态</span>
                      </a>
                    </li>
                    <li class="py-1 mb-4">
                      <a v-on:click="toggleTabs(4)" v-bind:class="{'flex items-center text-gray-600 hover:text-blue-600': openTab !== 4, 'flex items-center text-blue-600': openTab === 4}">
                        <svg class="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                        </svg>
                        <span>数字孪生</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>

              <!-- Services list -->
              <div class="max-w-sm mx-auto md:max-w-none">

                <!-- Services container -->
                <div class="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">

                  <!-- 1st service -->
                  <a href="/services/rtm-mr" v-bind:class="{'hidden': openTab !== 1, 'block flex flex-col h-full rounded bg-gray-100 transition duration-300 ease-in-out hover:shadow-lg': openTab == 1}">
                    <div class="items-left p-8">
                      <p class="text-gray-900 pd-12 grow">反应运移-机理简化（RTM-MR ） 耦合建模方法</p>
                      <p class="text-sm mt-4">
                        <div>
                          <span class="text-blue-600 hover:text-blue-500">了解更多 -></span>
                        </div>
                      </p> 
                    </div>
                  </a>

                  <!-- 2nd article -->
                  <a href="/services/ce-qual-w2" v-bind:class="{'hidden': openTab !== 2, 'block flex flex-col h-full rounded bg-gray-100 transition duration-300 ease-in-out hover:shadow-lg': openTab == 2}">
                    <div class="items-left p-8">
                      <p class="text-gray-900 pd-12 grow">立面二维水动力水质水生态模型 CE-QUAL-W2</p>
                      <p class="text-sm mt-4">
                        <div>
                          <span class="text-blue-600 hover:text-blue-500">了解更多 -></span>
                        </div>
                      </p> 
                    </div>
                  </a>

                  <!-- 3rd article -->
                  <a href="/services/data-python" v-bind:class="{'hidden': openTab !== 3, 'block flex flex-col h-full rounded bg-gray-100 transition duration-300 ease-in-out hover:shadow-lg': openTab == 3}">
                    <div class="items-left p-8">
                      <p class="text-gray-900 pd-12 grow">Python大数据处理与数据挖掘</p>
                      <p class="text-sm mt-4">
                        <div>
                          <span class="text-blue-600 hover:text-blue-500">了解更多 -></span>
                        </div>
                      </p> 
                    </div>
                  </a>

                  <!-- 4th article -->
                  <a href="/services/rtm-mr" v-bind:class="{'hidden': openTab !== 3, 'block flex flex-col h-full rounded bg-gray-100 transition duration-300 ease-in-out hover:shadow-lg': openTab == 3}">
                    <div class="items-left p-8">
                      <p class="text-gray-900 pd-12 grow">全球综合数据库</p>
                      <p class="text-sm mt-4">
                        <div>
                          <span class="text-blue-600 hover:text-blue-500">了解更多 -></span>
                        </div>
                      </p> 
                    </div>
                  </a>

                  <!-- 5th article -->
                  <a href="/services/rtm-mr" v-bind:class="{'hidden': openTab !== 3, 'block flex flex-col h-full rounded bg-gray-100 transition duration-300 ease-in-out hover:shadow-lg': openTab == 3}">
                    <div class="items-left p-8">
                      <p class="text-gray-900 pd-12 grow">清源智慧生态Ecosohere</p>
                      <p class="text-sm mt-4">
                        <div>
                          <span class="text-blue-600 hover:text-blue-500">了解更多 -></span>
                        </div>
                      </p> 
                    </div>
                  </a>

                  <!-- 6th article -->
                  <a href="/services/rtm-mr" v-bind:class="{'hidden': openTab !== 3, 'block flex flex-col h-full rounded bg-gray-100 transition duration-300 ease-in-out hover:shadow-lg': openTab == 3}">
                    <div class="items-left p-8">
                      <p class="text-gray-900 pd-12 grow">燃烧与热力系统</p>
                      <p class="text-sm mt-4">
                        <div>
                          <span class="text-blue-600 hover:text-blue-500">了解更多 -></span>
                        </div>
                      </p> 
                    </div>
                  </a>

                  <!-- 7th article -->
                  <a href="/services/rtm-mr" v-bind:class="{'hidden': openTab !== 4, 'block flex flex-col h-full rounded bg-gray-100 transition duration-300 ease-in-out hover:shadow-lg': openTab == 4}">
                    <div class="items-left p-8">
                      <p class="text-gray-900 pd-12 grow">流域数值模拟与水质数字孪生化</p>
                      <p class="text-sm mt-4">
                        <div>
                          <span class="text-blue-600 hover:text-blue-500">了解更多 -></span>
                        </div>
                      </p> 
                    </div>
                  </a>

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
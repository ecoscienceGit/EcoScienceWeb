<template>
  <section class="relative">

    <!-- Section background (needs .relative class on parent and next sibling elements) -->
    <div class="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
    <div class="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <!-- Section header -->
        <div class="max-w-6xl mx-auto text-left pb-12 md:pb-20">
          <h2 class="h2 mb-4">业务范围</h2>
        </div>

        <!-- Items -->
        <div class="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">

          <!-- 1st item -->
          <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <!-- <svg class="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <rect class="fill-current text-blue-600" width="64" height="64" rx="32" />
                <g stroke-width="2" class="transform scale-90 translate-x-2.5 translate-y-2">
                <path class="stroke-current text-white" stroke-linecap="round" stroke-linejoin="round" d="M9 29C11.7614 29 14 26.7614 14 24C14 26.7614 16.2386 29 19 29C21.7614 29 24 26.7614 24 24C24 26.7614 26.2386 29 29 29C31.7614 29 34 26.7614 34 24C34 26.7614 36.2386 29 39 29C41.7614 29 44 26.7614 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 26.7614 6.23858 29 9 29Z" />
                <path class="stroke-current text-white" stroke-linecap="round" stroke-linejoin="round" d="M28 13C28 15.2091 26.2091 17 24 17C21.7909 17 20 15.2091 20 13C20 10.7909 24 4 24 4C24 4 28 10.7909 28 13Z"/>
                </g>
              </g>
            </svg> -->

            <svg class="w-24 h-24 p-1 -mt-1 mb-2" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke-width="4" class="transform translate-x-2 translate-y-2">
                <path class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" d="M9 29C11.7614 29 14 26.7614 14 24C14 26.7614 16.2386 29 19 29C21.7614 29 24 26.7614 24 24C24 26.7614 26.2386 29 29 29C31.7614 29 34 26.7614 34 24C34 26.7614 36.2386 29 39 29C41.7614 29 44 26.7614 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 26.7614 6.23858 29 9 29Z" />
                <path class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" d="M28 13C28 15.2091 26.2091 17 24 17C21.7909 17 20 15.2091 20 13C20 10.7909 24 4 24 4C24 4 28 10.7909 28 13Z"/>
              </g>
            </svg>

            <router-link
              to="/services"
              class="text-xl font-bold leading-snug tracking-tight mb-1"
              >智慧水利</router-link
            >
            <p class="text-gray-600 text-center">一维二维三维水环境模拟软件定制</p>
          </div>

          <!-- 2nd item -->
          <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <svg class="w-24 h-24 p-1 -mt-1 mb-2" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke-width="4" class="transform translate-x-2 translate-y-2">
                <path class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" d="M24 44C32.2843 44 39 37.2843 39 29C39 15 24 4 24 4C24 4 9 15 9 29C9 37.2843 15.7157 44 24 44Z"/>
                <path class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" d="M9 29.0001C9 37.2844 15.7157 44.0001 24 44.0001C32.2843 44.0001 39 37.2844 39 29.0001C39 29.0001 30 32.0001 24 29.0001C18 26.0001 9 29.0001 9 29.0001Z"/>
              </g>
            </svg>

            <router-link
              to="/services"
              class="text-xl font-bold leading-snug tracking-tight mb-1"
              >智慧水质</router-link
            >
            <p class="text-gray-600 text-center">一维二维三维水质模型</p>
          </div>


          <!-- 3rd item -->
          <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <svg class="w-24 h-24 p-1 -mt-1 mb-2" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke-width="4" class="transform translate-x-2 translate-y-2">
                <path class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" d="M13.0448 14C13.5501 8.3935 18.262 4 24 4C29.738 4 34.4499 8.3935 34.9552 14H35C39.9706 14 44 18.0294 44 23C44 27.9706 39.9706 32 35 32H13C8.02944 32 4 27.9706 4 23C4 18.0294 8.02944 14 13 14H13.0448Z"/>
                <path class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" d="M24 28L29 23"/>
                <path class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" d="M24 25L18 19"/>
                <path class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" d="M24 44V18"/>  
              </g>
            </svg>

            <router-link
              to="/services"
              class="text-xl font-bold leading-snug tracking-tight mb-1"
              >智慧生态</router-link
            >
            <p class="text-gray-600 text-center">人工智能大数据分析、清源智慧生态ecosohere、燃烧动力学</p>
          </div>


          <!-- 4th item -->
          <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <svg class="w-24 h-24 p-1 -mt-1 mb-2" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g stroke-width="4" class="transform translate-x-2 translate-y-2">
                <rect class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" x="19" y="32" width="10" height="9"/>
                <rect class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" x="5" y="8" width="38" height="24" rx="2"/>
                <path class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" d="M22 27H26"/>
                <path class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" d="M14 41L34 41"/>
              </g>
            </svg>

            <router-link
              to="/services"
              class="text-xl font-bold leading-snug tracking-tight mb-1"
              >数字孪生</router-link
            >
            <p class="text-gray-600 text-center">流域数值模拟与水质数字孪生化--掌握水环境的未来</p>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesServices',
}
</script>
<template>
  <section class="relative">

    <!-- Section background (needs .relative class on parent and next sibling elements) -->
    <div class="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
    <div class="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12">

        <!-- Section header -->
        <div class="max-w-6xl mx-auto text-left pb-12 md:pb-20">
          <h2 class="h2 mb-4">{{ $t('services.title') }}</h2>
        </div>

        <!-- Items -->
        <div class="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-stretch md:max-w-2xl lg:max-w-none">
        <!-- <div class="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none"> -->

          <!-- 1st item -->
          <router-link class="transition duration-300 ease-in-out hover:shadow-lg mb-4" to="/services-category/smart-water-management">
            <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">

              <svg class="w-24 h-24 p-1 -mt-1 mb-2" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke-width="4" class="transform translate-x-2 translate-y-2">
                  <path class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" d="M9 29C11.7614 29 14 26.7614 14 24C14 26.7614 16.2386 29 19 29C21.7614 29 24 26.7614 24 24C24 26.7614 26.2386 29 29 29C31.7614 29 34 26.7614 34 24C34 26.7614 36.2386 29 39 29C41.7614 29 44 26.7614 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 26.7614 6.23858 29 9 29Z" />
                  <path class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" d="M28 13C28 15.2091 26.2091 17 24 17C21.7909 17 20 15.2091 20 13C20 10.7909 24 4 24 4C24 4 28 10.7909 28 13Z"/>
                </g>
              </svg>

              <p class="text-xl font-bold leading-snug tracking-tight mb-1">{{ $t('services.smartWaterManagement.title') }}</p>
              <p class="text-gray-600 text-center">{{ $t('services.smartWaterManagement.intro') }}</p>
            </div>
          </router-link>

          <!-- 2nd item -->
          <router-link class="transition duration-300 ease-in-out hover:shadow-lg mb-4" to="/services-category/smart-water-quality">
            <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">
              <svg class="w-24 h-24 p-1 -mt-1 mb-2" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke-width="4" class="transform translate-x-2 translate-y-2">
                  <path class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" d="M24 44C32.2843 44 39 37.2843 39 29C39 15 24 4 24 4C24 4 9 15 9 29C9 37.2843 15.7157 44 24 44Z"/>
                  <path class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" d="M9 29.0001C9 37.2844 15.7157 44.0001 24 44.0001C32.2843 44.0001 39 37.2844 39 29.0001C39 29.0001 30 32.0001 24 29.0001C18 26.0001 9 29.0001 9 29.0001Z"/>
                </g>
              </svg>

              <p class="text-xl font-bold leading-snug tracking-tight mb-1">{{ $t('services.smartWaterQuality.title') }}</p>
              <p class="text-gray-600 text-center">{{ $t('services.smartWaterQuality.intro') }}</p>
            </div>
          </router-link>

          <!-- 3rd item -->
          <router-link class="transition duration-300 ease-in-out hover:shadow-lg mb-4" to="/services-category/smart-ecology">
            <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">
              <svg class="w-24 h-24 p-1 -mt-1 mb-2" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke-width="4" class="transform translate-x-2 translate-y-2">
                  <path class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" d="M13.0448 14C13.5501 8.3935 18.262 4 24 4C29.738 4 34.4499 8.3935 34.9552 14H35C39.9706 14 44 18.0294 44 23C44 27.9706 39.9706 32 35 32H13C8.02944 32 4 27.9706 4 23C4 18.0294 8.02944 14 13 14H13.0448Z"/>
                  <path class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" d="M24 28L29 23"/>
                  <path class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" d="M24 25L18 19"/>
                  <path class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" d="M24 44V18"/>  
                </g>
              </svg>

              <p class="text-xl font-bold leading-snug tracking-tight mb-1">{{ $t('services.smartEcology.title') }}</p>
              <p class="text-gray-600 text-center">{{ $t('services.smartEcology.Artificial.title') + '; ' + $t('services.smartEcology.Ecology.title') + '; ' + $t('services.smartEcology.Combustion.title') }}</p>
            </div>
          </router-link>

          <!-- 4th item -->
          <router-link class="transition duration-300 ease-in-out hover:shadow-lg mb-4" to="/services-category/digital-twin">
            <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">

              <svg class="w-24 h-24 p-1 -mt-1 mb-2" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke-width="4" class="transform translate-x-2 translate-y-2">
                  <rect class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" x="19" y="32" width="10" height="9"/>
                  <rect class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" x="5" y="8" width="38" height="24" rx="2"/>
                  <path class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" d="M22 27H26"/>
                  <path class="stroke-current text-blue-600" stroke-linecap="round" stroke-linejoin="round" d="M14 41L34 41"/>
                </g>
              </svg>
              <!-- <svg class="w-24 h-24 p-1 -mt-1 mb-2" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke-width="4" class="transform translate-x-2 translate-y-2">
                  <path class="stroke-current text-blue-600" d="M44 29H4V42H44V29Z" stroke-linejoin="round"/>
                  <path class="stroke-current text-blue-600" d="M35.5 38C36.8807 38 38 36.8807 38 35.5C38 34.1193 36.8807 33 35.5 33C34.1193 33 33 34.1193 33 35.5C33 36.8807 34.1193 38 35.5 38Z"/>
                  <path class="stroke-current text-blue-600" d="M4 28.9998L9.03837 4.99902H39.0205L44 28.9998" stroke-linejoin="round"/>
                  <path class="stroke-current text-blue-600" d="M19.006 16.0259C16.8635 16.0259 15 17.5124 15 19.5128C15 21.9998 17.0947 22.9998 19.6973 22.9998C20.1437 22.9998 20.5567 22.9998 20.9768 22.9998" stroke-linecap="round" stroke-linejoin="round"/>
                  <path class="stroke-current text-blue-600" d="M29.007 16.0259C31.1039 16.0259 33 16.9994 33 19.5128C33 21.9998 30.8902 22.9998 28.2877 22.9998C27.8412 22.9998 27.4013 22.9998 26.9871 22.9998" stroke-linecap="round" stroke-linejoin="round"/>
                  <path class="stroke-current text-blue-600" d="M29.0069 16.0261C29.0069 13.0423 27.0231 11 23.9998 11C20.9766 11 19.0059 12.9927 19.0059 16.0261" stroke-linecap="round" stroke-linejoin="round"/>
                  <path class="stroke-current text-blue-600" d="M20 23H28"/>
                </g>
              </svg> -->

              <p class="text-xl font-bold leading-snug tracking-tight mb-1">{{ $t('services.digitalTwin.title') }}</p>
              <p class="text-gray-600 text-center">{{ $t('services.digitalTwin.systems.title') + '; ' + $t('services.digitalTwin.cloud.title') }}</p>
            </div>
          </router-link>

          <!-- 5th item -->
          <router-link class="transition duration-300 ease-in-out hover:shadow-lg mb-4" to="/services-category/ai-transformation">
            <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">

              <svg class="w-24 h-24 p-1 -mt-1 mb-2" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke-width="4" class="transform translate-x-2 translate-y-2">
                  <rect class="stroke-current text-blue-600" x="9" y="17" width="30" height="26" rx="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path class="stroke-current text-blue-600" d="M33 9L28 17" stroke-linecap="round" stroke-linejoin="round"/>
                  <path class="stroke-current text-blue-600" d="M15 9L20 17" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle class="stroke-current text-blue-600" cx="34" cy="7" r="2" />
                  <circle class="stroke-current text-blue-600" cx="14" cy="7" r="2" />
                  <rect class="stroke-current text-blue-600" x="16" y="24" width="16" height="8" rx="4" />
                  <path class="stroke-current text-blue-600" d="M9 24H4V34H9" stroke-linecap="round" stroke-linejoin="round"/>
                  <path class="stroke-current text-blue-600" d="M39 24H44V34H39" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>

              <p class="text-xl font-bold leading-snug tracking-tight mb-1">{{ $t('services.aiTransformation.title') }}</p>
              <p class="text-gray-600 text-center">{{ $t('services.aiTransformation.intro') }}</p>
            </div>
          </router-link>

          <!-- 6th item -->
          <router-link class="transition duration-300 ease-in-out hover:shadow-lg mb-4" to="/services-category/social-media-ecology">
            <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-full">
              
              <!-- <svg class="w-24 h-24 p-1 -mt-1 mb-2" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke-width="4" class="transform translate-x-2 translate-y-2">
                  <path class="stroke-current text-blue-600" d="M4 6H44V36H29L24 41L19 36H4V6Z" stroke-linecap="round" stroke-linejoin="round"/>
                  <path class="stroke-current text-blue-600" d="M23 21H25.0025" stroke-linecap="round"/>
                  <path class="stroke-current text-blue-600" d="M33.001 21H34.9999" stroke-linecap="round"/>
                  <path class="stroke-current text-blue-600" d="M13.001 21H14.9999" stroke-linecap="round"/>
                </g>
              </svg> -->

              <svg class="w-24 h-24 p-1 -mt-1 mb-2" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g stroke-width="4" class="transform translate-x-2 translate-y-2">
                  <path class="stroke-current text-blue-600" d="M44.0001 24C44.0001 35.0457 35.0458 44 24.0001 44C18.0266 44 4.00006 44 4.00006 44C4.00006 44 4.00006 29.0722 4.00006 24C4.00006 12.9543 12.9544 4 24.0001 4C35.0458 4 44.0001 12.9543 44.0001 24Z" stroke-linecap="round" stroke-linejoin="round"/>
                  <path class="stroke-current text-blue-600" d="M14 18L32 18" stroke-linecap="round" stroke-linejoin="round"/>
                  <path class="stroke-current text-blue-600" d="M14 26H32" stroke-linecap="round" stroke-linejoin="round"/>
                  <path class="stroke-current text-blue-600" d="M14 34H24" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>

              <p class="text-xl font-bold leading-snug tracking-tight mb-1">{{ $t('services.socialMediaEcology.title') }}</p>
              <p class="text-gray-600 text-center">{{ $t('services.socialMediaEcology.intro') }}</p>
            </div>
          </router-link>
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
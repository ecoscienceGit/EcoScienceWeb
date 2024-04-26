<template>
  <footer>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Top area: Blocks -->
      <div
        class="grid grid-cols-1 lg:grid-cols-8 gap-4 py-4 md:py-12 border-t border-gray-200"
      >
        <!-- 1st block logo -->
        <div class="lg:col-span-2">
          <div class="mb-2 mt-4">
            <!-- Logo -->
            <router-link to="/" class="inline-block" aria-label="Cruip">
              <router-link to="/" class="flex items-center" aria-label="Cruip">
                <img
                  src="../images/EcoSci_icon_2.png"
                  alt="Icon"
                  class="w-32 h-26 mr-2"
                />
              </router-link>
            </router-link>
          </div>
        </div>

        <!-- 2nd block -->
        <div class="lg:col-span-1">
          <router-link
            to="/about"
            class="text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out font-medium mb-2 block"
            >{{ $t('about') }}</router-link
          >
          <ul class="text-sm">
            <li class="mb-2">
              <div class="text-gray-600">
                {{ $t('about.companyProfile') }}
              </div>
            </li>
            <li class="mb-2">
              <div class="text-gray-600">{{ $t('about.qualificationsHonors') }}</div>
            </li>
            <li class="mb-2">
              <div class="text-gray-600">{{ $t('about.contactInfo') }}</div>
            </li>
          </ul>
        </div>

        <!-- 3rd block -->
        <div class="lg:col-span-1">
          <router-link
            to="/services"
            class="text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out font-medium mb-2 block"
            >{{ $t('services') }}</router-link
          >
          <ul class="text-sm">
            <li class="mb-2">
              <div class="text-gray-600">{{ $t('services.smartWaterManagement') }}</div>
            </li>
            <li class="mb-2">
              <div class="text-gray-600">{{ $t('services.smartWaterQuality') }}</div>
            </li>
            <li class="mb-2">
              <div class="text-gray-600">{{ $t('services.smartEcology') }}</div>
            </li>
            <li class="mb-2">
              <div class="text-gray-600">{{ $t('services.digitalTwin') }}</div>
            </li>
            <li class="mb-2">
              <div class="text-gray-600">{{ $t('services.educationConsulting') }}</div>
            </li>
          </ul>
        </div>

        <!-- 4th block -->
        <div class="lg:col-span-1">
          <router-link
            to="/blog"
            class="text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out font-medium mb-2 block"
            >{{ $t('blog') }}</router-link
          >
          <ul class="text-sm">
            <li class="mb-2">
              <div class="text-gray-600">{{ $t('blog.internshipRecruitment') }}</div>
            </li>
            <li class="mb-2">
              <div class="text-gray-600">{{ $t('blog.academicConferences') }}</div>
            </li>
            <li class="mb-2">
              <div class="text-gray-600">{{ $t('blog.relatedTraining') }}</div>
            </li>
          </ul>
        </div>

        <!-- 5th block -->
        <div class="lg:col-span-1">
          <router-link
            to="/projects"
            class="text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out font-medium mb-2 block"
            >{{ $t('projects') }}</router-link
          >
        </div>

        <!-- 6th block -->
        <!-- <div class="lg:col-span-1">
          <router-link
            to="/download"
            class="text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out font-medium mb-2 block"
            >软件下载</router-link
          >
          <ul class="text-sm">
            <li class="mb-2">
              <router-link
                to="/download"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >下载链接</router-link
              >
            </li>
          </ul>
        </div> -->

        <!-- 7th block contact-->
        <div class="lg:col-span-2 flex flex-col items-center justify-center">
          <img
            src="../images/wechat_qr.png"
            alt="Icon"
            class="w-24 h-24 mb-1"
          />
          <p class="text-xs text-gray-600 mb-2">{{ $t('wechatOfficialAccount') }}</p>
          <p class="text-xs text-gray-600 mb-2">{{ $t('ourEmail') }}</p>
        </div>
      </div>

      <!-- Bottom area -->
      <div
        class="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200"
      >
        <!-- Copyrights note -->
        <div class="text-sm text-gray-600 mr-4">
          &copy; {{ $t('copyright') }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

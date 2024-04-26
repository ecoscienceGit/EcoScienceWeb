<template>
  <footer>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Top area: Blocks -->
      <div
        class="grid grid-cols-1 lg:grid-cols-9 gap-4 py-4 md:py-12 border-t border-gray-200"
      >
        <!-- 1st block logo -->
        <div class="lg:col-span-3">
          <div class="mb-2">
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
            >关于我们</router-link
          >
          <ul class="text-sm">
            <li class="mb-2">
              <router-link
                to="/about"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >公司概况</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="/about"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >资质荣誉</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="/about"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >联系方式</router-link
              >
            </li>
          </ul>
        </div>

        <!-- 3rd block -->
        <div class="lg:col-span-1">
          <router-link
            to="/services"
            class="text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out font-medium mb-2 block"
            >业务范围</router-link
          >
          <ul class="text-sm">
            <li class="mb-2">
              <router-link
                to="/services"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >智慧水利</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="/services"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >智慧水质</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="/services"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >智慧生态</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="/services"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >数字孪生</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="/services"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >教育咨询</router-link
              >
            </li>
          </ul>
        </div>

        <!-- 4th block -->
        <div class="lg:col-span-1">
          <router-link
            to="/blog"
            class="text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out font-medium mb-2 block"
            >公司动态</router-link
          >
          <ul class="text-sm">
            <li class="mb-2">
              <router-link
                to="/blog"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >实习招聘</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="/blog"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >学术会议</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="/blog"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >相关培训</router-link
              >
            </li>
          </ul>
        </div>

        <!-- 5th block -->
        <div class="lg:col-span-1">
          <router-link
            to="/projects"
            class="text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out font-medium mb-2 block"
            >项目案例</router-link
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
          <p class="text-xs text-gray-600 mb-2">思益清源公众号</p>
          <p class="text-xs text-gray-600 mb-2">企业邮箱：ecosci@outlook.com</p>
        </div>
      </div>

      <!-- Bottom area -->
      <div
        class="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200"
      >
        <!-- Copyrights note -->
        <div class="text-sm text-gray-600 mr-4">
          &copy; 2024 陕西思益清源科技公司
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

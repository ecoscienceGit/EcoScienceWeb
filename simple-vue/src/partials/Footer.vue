<template>
  <footer>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Top area: Blocks -->
      <div
        class="grid grid-cols-1 lg:grid-cols-9 gap-4 py-4 md:py-12 border-t border-gray-200"
      >
        <!-- 1st block -->
        <div class="lg:col-span-2">
          <div class="mb-2">
            <!-- Logo -->
            <router-link to="/" class="inline-block" aria-label="Cruip">
              <router-link to="/" class="flex items-center" aria-label="Cruip">
                <img src="../images/EcoSci_icon_2.png" alt="Icon" class="w-32 h-36 mr-2" />
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
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >公司概况</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >企业文化</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >人才队伍</router-link
              >
            </li>
          </ul>
        </div>

        <!-- 3rd block -->
        <div class="lg:col-span-1">
          <router-link 
            to="/service" 
            class="text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out font-medium mb-2 block"
            >业务范围</router-link>
          <ul class="text-sm">
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >智慧水利</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >智慧水质</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >智慧生态</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >数字孪生</router-link
              >
            </li>
          </ul>
        </div>

        <!-- 4th block -->
        <div class="lg:col-span-1">
          <router-link 
            to="/blog" 
            class="text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out font-medium mb-2 block"
            >公司动态</router-link>
          <ul class="text-sm">
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >实习招聘</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >学术会议</router-link
              >
            </li>
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >相关培训</router-link
              >
            </li>
          </ul>
        </div>

        <!-- 5th block -->
        <div class="lg:col-span-1">
          <router-link 
            to="/project" 
            class="text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out font-medium mb-2 block"
            >项目案例</router-link>
        </div>
        
        <!-- 6th block -->
        <div class="lg:col-span-1">
          <router-link 
            to="/download" 
            class="text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out font-medium mb-2 block"
            >软件下载</router-link>
          <ul class="text-sm">
            <li class="mb-2">
              <router-link
                to="#"
                class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out"
                >下载链接</router-link
              >
            </li>
          </ul>
        </div>

        <!-- 7th block -->
        <div class="lg:col-span-2 flex flex-col items-center justify-center">
          <img src="../images/wechat_qr.png" alt="Icon" class="w-24 h-24 mb-1" />
          <p class="text-xs text-gray-600 mb-2">思益清源公众号</p>
          <p class="text-xs text-gray-600 mb-2">企业邮箱：ecosci@outlook.com</p>
        </div>
      </div>

      <!-- Bottom area -->
      <div
        class="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200"
      >
        <!-- Social links -->
        <ul class="flex mb-4 md:order-1 md:ml-4 md:mb-0">
          <li>
            <router-link
              to="#"
              class="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
              aria-label="Twitter"
            >
              <svg
                class="w-8 h-8 fill-current"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"
                />
              </svg>
            </router-link>
          </li>
          <li class="ml-4">
            <router-link
              to="#"
              class="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
              aria-label="Github"
            >
              <svg
                class="w-8 h-8 fill-current"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"
                />
              </svg>
            </router-link>
          </li>
          <li class="ml-4">
            <router-link
              to="#"
              class="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
              aria-label="Facebook"
            >
              <svg
                class="w-8 h-8 fill-current"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z"
                />
              </svg>
            </router-link>
          </li>
        </ul>

        <!-- Copyrights note -->
        <div class="text-sm text-gray-600 mr-4">
          &copy; EcoSci.com. All rights reserved.
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

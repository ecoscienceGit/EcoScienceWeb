<template>
  <header
    class="fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out"
    :class="{ 'bg-white backdrop-blur-sm shadow-lg': !top }"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Site branding -->
        <div class="shrink-0 mr-4">
          <!-- Logo -->
          <router-link to="/" class="flex items-center" aria-label="Cruip">
            <img
              src="../images/EcoSci_icon_1.png"
              alt="Icon"
              class="w-12 h-12 mr-2"
            />
            <h3 class="text-blue-111 font-semibold">思益清源</h3>
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="hidden md:flex md:grow">
          <!-- Desktop menu links -->
          <ul class="flex grow justify-end flex-wrap items-center">
            <li>
              <router-link
                to="/about"
                class="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >关于我们</router-link
              >
            </li>
            <li>
              <router-link
                to="/service"
                class="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >业务范围</router-link
              >
            </li>
            <li>
              <router-link
                to="/blog"
                class="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >公司动态</router-link
              >
            </li>
            <li>
              <router-link
                to="/projects"
                class="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >项目案例</router-link
              >
            </li>
            <li>
              <router-link
                to="/download"
                class="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >软件下载</router-link
              >
            </li>
            <!-- 后期加入中英文转换按钮 -->
          </ul>
        </nav>

        <!-- Mobile menu -->
        <div class="flex md:hidden">
          <!-- Hamburger button -->
          <button
            class="hamburger"
            ref="hamburger"
            :class="{ active: mobileNavOpen }"
            aria-controls="mobile-nav"
            :aria-expanded="mobileNavOpen"
            @click="mobileNavOpen = !mobileNavOpen"
          >
            <span class="sr-only">Menu</span>
            <svg
              class="w-6 h-6 fill-current text-gray-900"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="4" width="24" height="2" />
              <rect y="11" width="24" height="2" />
              <rect y="18" width="24" height="2" />
            </svg>
          </button>

          <!-- Mobile navigation -->
          <transition
            enter-active-class="transition ease-out duration-200 transform"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-out duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <nav
              id="mobile-nav"
              ref="mobileNav"
              v-show="mobileNavOpen"
              class="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
            >
              <ul class="px-5 py-2">
                <li>
                  <router-link
                    to="/about"
                    class="flex text-gray-600 hover:text-gray-900 py-2"
                    >关于我们</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/tutorials"
                    class="flex text-gray-600 hover:text-gray-900 py-2"
                    >业务范围</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/blog"
                    class="flex text-gray-600 hover:text-gray-900 py-2"
                    >公司动态</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/blog"
                    class="flex text-gray-600 hover:text-gray-900 py-2"
                    >项目案例</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/blog"
                    class="flex text-gray-600 hover:text-gray-900 py-2"
                    >联系我们</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/blog"
                    class="flex text-gray-600 hover:text-gray-900 py-2"
                    >软件下载</router-link
                  >
                </li>
              </ul>
            </nav>
          </transition>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Dropdown from "./../utils/Dropdown.vue";

export default {
  name: "Header",
  components: {
    Dropdown,
  },
  data: function () {
    return {
      mobileNavOpen: false,
      top: true,
    };
  },
  methods: {
    clickOutside(e) {
      if (
        !this.mobileNavOpen ||
        this.$refs.mobileNav.contains(e.target) ||
        this.$refs.hamburger.contains(e.target)
      )
        return;
      this.mobileNavOpen = false;
    },
    keyPress() {
      if (!this.mobileNavOpen || event.keyCode !== 27) return;
      this.mobileNavOpen = false;
    },
    handleScroll() {
      this.top = window.pageYOffset > 10 ? false : true;
    },
  },
  mounted() {
    document.addEventListener("click", this.clickOutside);
    document.addEventListener("keydown", this.keyPress);
    document.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.clickOutside);
    document.removeEventListener("keydown", this.keyPress);
    document.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

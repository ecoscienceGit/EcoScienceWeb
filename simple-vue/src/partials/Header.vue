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
              src="../images/EcoSci_icon_2.png"
              alt="Icon"
              class="w-10 h-10 mr-2"
            />
            <h3 class="text-blue-111 font-semibold">{{ $t("title") }}</h3>
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
                >{{ $t("about.title") }}</router-link
              >
            </li>
            <li>
              <router-link
                to="/services"
                class="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >{{ $t("services.title") }}</router-link
              >
            </li>
            <li>
              <router-link
                to="/News"
                class="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >{{ $t("news.title") }}</router-link
              >
            </li>
            <li>
              <router-link
                to="/projects"
                class="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >{{ $t("projects") }}</router-link
              >
            </li>
            <li>
              <router-link
                to="/contacts"
                class="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >{{ $t("contact.title") }}</router-link
              >
            </li>
            <!-- <li>
              <router-link
                to="/download"
                class="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >软件下载</router-link
              >
            </li> -->

            <!-- switch language -->
            <li>
              <Dropdown
                title="Language/语言"
              >
                <li>
                  <button
                    class="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
                    :class="{ 'font-semibold': currentLocale !== 'en' }"
                    @click="changeLocale('zh')"
                  >
                    简体中文
                  </button>
                </li>
                <li>
                  <button
                    class="text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
                    :class="{ 'font-bold': currentLocale === 'en', 'font-normal': currentLocale !== 'en'}"
                    @click="changeLocale('en')"
                  >
                    English
                  </button>
                </li>
              </Dropdown>
            </li>
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
                    >{{ $t("about.title") }}</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/services"
                    class="flex text-gray-600 hover:text-gray-900 py-2"
                    >{{ $t("services.title") }}</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/News"
                    class="flex text-gray-600 hover:text-gray-900 py-2"
                    >{{ $t("news.title") }}</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/projects"
                    class="flex text-gray-600 hover:text-gray-900 py-2"
                    >{{ $t("projects") }}</router-link
                  >
                </li>
                <li>
                  <router-link
                    to="/contacts"
                    class="flex text-gray-600 hover:text-gray-900 py-2"
                    >{{ $t("contact.title") }}</router-link
                  >
                </li>
                <!-- <li>
                  <router-link
                    to="/download"
                    class="flex text-gray-600 hover:text-gray-900 py-2"
                    >软件下载</router-link
                  >
                </li> -->
                <li>
                  <Dropdown
                    :title="currentLocale === 'en' ? 'Language' : '语言'"
                  >
                    <li>
                      <button
                        class="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
                        @click="changeLocale('en')"
                      >
                        English
                      </button>
                    </li>
                    <li>
                      <button
                        class="font-medium text-sm text-gray-600 hover:text-gray-900 flex py-2 px-5 leading-tight"
                        @click="changeLocale('zh')"
                      >
                        简体中文
                      </button>
                    </li>
                  </Dropdown>
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
import { useI18n } from "vue-i18n";

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
  setup() {
    const { locale } = useI18n();

    const changeLocale = (newLocale) => {
      locale.value = newLocale;
      localStorage.setItem('userLanguage', newLocale); // store it in local storage
    };

    return {
      changeLocale,
      currentLocale: locale,
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

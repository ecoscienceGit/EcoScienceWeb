<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Page header -->
        <div class="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
          <h1 class="h1 mb-4">{{ $t("projects") }}</h1>
          <p class="text-xl text-gray-600">{{ $t("slogon") }}</p>
        </div>

        <!-- Main content -->
        <div class="md:flex md:justify-between">
          <!-- Articles container -->
          <div class="md:grow -mt-4">
            <!-- Project 1 -->
            <article
              class="flex flex-col md:flex-row items-center py-4 border-b border-gray-200"
            >
              <div
                class="flex flex-col items-center md:flex-row md:items-center w-full"
              >
                <router-link to="/project-post/guxian" class="block">
                  <img
                    src="/projects/images/guxian/cover.jpg"
                    alt="黄河项目"
                    class="w-48 h-32 md:w-64 md:h-48 rounded-lg shadow-md"
                  />
                </router-link>
                <div class="md:ml-6 text-center md:text-left">
                  <header>
                    <h2 class="text-xl font-semibold mb-2">
                      <router-link
                        to="/project-post/guxian"
                        class="hover:underline text-blue-600"
                      >
                        {{ $t("project.huanghe") }}
                      </router-link>
                    </h2>
                  </header>
                  <footer class="text-sm flex items-center mt-4">
                    <div>
                      <span class="text-gray-600"></span>
                    </div>
                  </footer>
                </div>
              </div>
            </article>
            <!-- Project 6 -->
            <article
              class="flex flex-col md:flex-row items-center py-4 border-b border-gray-200"
            >
              <div
                class="flex flex-col items-center md:flex-row md:items-center w-full"
              >
                <router-link to="/project-post/learningWithUs" class="block">
                  <img
                    src="/projects/images/learningWithUs/cover.jpg"
                    alt="learningWithUs"
                    class="w-48 h-32 md:w-64 md:h-48 rounded-lg shadow-md"
                  />
                </router-link>
                <div class="md:ml-6 text-center md:text-left">
                  <header>
                    <h2 class="text-xl font-semibold mb-2">
                      <router-link
                        to="/project-post/learningWithUs"
                        class="hover:underline text-blue-600"
                      >
                        {{ $t("project.consultation") }}
                      </router-link>
                    </h2>
                  </header>
                  <footer class="text-sm flex items-center mt-4">
                    <div>
                      <span class="text-gray-600"></span>
                    </div>
                  </footer>
                </div>
              </div>
            </article>
            <!-- Project 2 -->
            <article
              class="flex flex-col md:flex-row items-center py-4 border-b border-gray-200"
            >
              <div
                class="flex flex-col items-center md:flex-row md:items-center w-full"
              >
                <router-link to="/project-post/wuliangsuhai" class="block">
                  <img
                    src="/projects/images/wuliangsuhai/cover.jpg"
                    alt="wuliangsuhai"
                    class="w-48 h-32 md:w-64 md:h-48 rounded-lg shadow-md"
                  />
                </router-link>
                <div class="md:ml-6 text-center md:text-left">
                  <header>
                    <h2 class="text-xl font-semibold mb-2">
                      <router-link
                        to="/project-post/wuliangsuhai"
                        class="hover:underline text-blue-600"
                      >
                        {{ $t("project.wuliangsu") }}
                      </router-link>
                    </h2>
                  </header>
                  <footer class="text-sm flex items-center mt-4">
                    <div>
                      <span class="text-gray-600"></span>
                    </div>
                  </footer>
                </div>
              </div>
            </article>

            <!-- Project 3 -->
            <article
              class="flex flex-col md:flex-row items-center py-4 border-b border-gray-200"
            >
              <div
                class="flex flex-col items-center md:flex-row md:items-center w-full"
              >
                <router-link to="/project-post/nanshuibeidiao" class="block">
                  <img
                    src="/projects/images/nanshuibeidiao/cover.jpg"
                    alt="nanshuibeidiao"
                    class="w-48 h-32 md:w-64 md:h-48 rounded-lg shadow-md"
                  />
                </router-link>
                <div class="md:ml-6 text-center md:text-left">
                  <header>
                    <h2 class="text-xl font-semibold mb-2">
                      <router-link
                        to="/project-post/nanshuibeidiao"
                        class="hover:underline text-blue-600"
                      >
                        {{ $t("project.nanshui") }}
                      </router-link>
                    </h2>
                  </header>
                  <footer class="text-sm flex items-center mt-4">
                    <div>
                      <span class="text-gray-600"></span>
                    </div>
                  </footer>
                </div>
              </div>
            </article>

            <!-- Project 4 -->
            <article
              class="flex flex-col md:flex-row items-center py-4 border-b border-gray-200"
            >
              <div
                class="flex flex-col items-center md:flex-row md:items-center w-full"
              >
                <router-link to="/project-post/yanxiban" class="block">
                  <img
                    src="/projects/images/yanxiban/cover.jpg"
                    alt="yanxiban"
                    class="w-48 h-32 md:w-64 md:h-48 rounded-lg shadow-md"
                  />
                </router-link>
                <div class="md:ml-6 text-center md:text-left">
                  <header>
                    <h2 class="text-xl font-semibold mb-2">
                      <router-link
                        to="/project-post/yanxiban"
                        class="hover:underline text-blue-600"
                      >
                        {{ $t("project.training") }}
                      </router-link>
                    </h2>
                  </header>
                  <footer class="text-sm flex items-center mt-4">
                    <div>
                      <span class="text-gray-600"></span>
                    </div>
                  </footer>
                </div>
              </div>
            </article>

            <!-- Project 5 -->
            <article
              class="flex flex-col md:flex-row items-center py-4 border-b border-gray-200"
            >
              <div
                class="flex flex-col items-center md:flex-row md:items-center w-full"
              >
                <router-link to="/project-post/competition" class="block">
                  <img
                    src="/projects/images/competition/cover.jpg"
                    alt="competition"
                    class="w-48 h-32 md:w-64 md:h-48 rounded-lg shadow-md"
                  />
                </router-link>
                <div class="md:ml-6 text-center md:text-left">
                  <header>
                    <h2 class="text-xl font-semibold mb-2">
                      <router-link
                        to="/project-post/competition"
                        class="hover:underline text-blue-600"
                      >
                        {{ $t("project.models") }}
                      </router-link>
                    </h2>
                  </header>
                  <footer class="text-sm flex items-center mt-4">
                    <div>
                      <span class="text-gray-600"></span>
                    </div>
                  </footer>
                </div>
              </div>
            </article>

            <!-- Additional projects would be added here in the same pattern -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

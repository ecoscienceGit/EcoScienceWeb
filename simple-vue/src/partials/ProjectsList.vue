<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Page header -->
        <div class="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
          <h1 class="h1 mb-4">项目案例</h1>
          <p class="text-xl text-gray-600">来句slogan 哈哈哈</p>
        </div>

        <!-- Main content -->
        <div class="md:flex md:justify-between">
          <!-- Articles container -->
          <div class="md:grow -mt-4">
            <!-- 1st article -->
            <article
              class="flex flex-col md:flex-row items-center py-4 border-b border-gray-200"
            >
              <div class="md:flex md:items-center">
                <router-link to="/blog-post" class="block">
                  <img
                    src="../images/about-01.jpg"
                    alt="Blog Post Preview"
                    class="w-48 h-32 md:w-64 md:h-48 rounded-lg shadow-md"
                  />
                </router-link>
                <div class="md:ml-6">
                  <header>
                    <h2 class="text-xl font-semibold mb-2">
                      <router-link
                        to="/blog-post"
                        class="hover:underline text-blue-600"
                      >
                        博日一
                      </router-link>
                    </h2>
                  </header>
                  <div class="text-lg text-gray-600 mb-4">项目简介</div>
                  <footer class="text-sm">
                    <span class="text-gray-600">2023年1月-2023年5月</span>
                  </footer>
                </div>
              </div>
              <router-link to="/blog-post" class="hidden md:block ml-auto">
                <span class="sr-only">阅读更多</span>
                <svg
                  class="w-6 h-6 fill-current text-blue-600"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z"
                  />
                </svg>
              </router-link>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectsList",
};
</script>

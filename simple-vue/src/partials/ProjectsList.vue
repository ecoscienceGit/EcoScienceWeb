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
            <article class="flex items-center py-4 border-b border-gray-200">
              <div>
                <header>
                  <h2 class="h4 mb-2">
                    <router-link to="/blog-post" class="hover:underline"
                      >Create and Deploy a blog with Simple</router-link
                    >
                  </h2>
                </header>
                <div class="text-lg text-gray-600 mb-4">
                  In this post, you will learn how to deploy a blog using Simple
                  custom asset source plugin that uses the webcam to insert a
                  photo in the image field.
                </div>
                <footer class="text-sm">
                  <div class="flex items-center">
                    <span class="text-gray-600">By </span>
                    <a class="font-medium hover:underline">Micheal Osman</a>
                    <span class="text-gray-600"> · July 20, 2020</span>
                  </div>
                </footer>
              </div>
              <router-link to="/blog-post" class="block shrink-0 ml-6">
                <span class="sr-only">Read more</span>
                <svg
                  class="w-4 h-4 fill-current text-blue-600"
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

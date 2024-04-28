<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <!-- Section header -->
        <div class="max-w-6xl mx-auto text-left pb-12 md:pb-20">
          <h2 class="h2 mb-4">{{ $t('news.title') }}</h2>
        </div>

        <!-- Blog list -->
        <div class="md:flex md:justify-between">
          <div class="md:grow -mt-4">
            <!-- 1st article -->
            <article class="flex items-center py-4 border-b border-gray-200">
              <div class="flex-grow">
                <header>
                  <h2 class="h4 mb-2">
                    <a href="https://mp.weixin.qq.com/s?__biz=Mzg2NjkwNzU1Nw==&mid=2247485114&idx=1&sn=766302a0af17eccec95645f145485a7f&chksm=ce42e270f9356b66fae534e1add565bee10fd232db46137a34d6c24db0f8c1abdb042465c08c&token=2005173252&lang=zh_CN#rd" class="hover:underline"
                      >{{ $t('news.tutorialZZ.title') }}</a>
                  </h2>
                </header>
                <div class="text-lg text-gray-600 mb-4">
                  {{ $t('news.tutorialZZ.summary') }}
                </div>
                <footer class="text-sm">
                  <div class="flex items-center">
                    <span class="text-gray-600">{{ $t('news.tutorialZZ.date') }}</span>
                  </div>
                </footer>
              </div>
              <a href="https://mp.weixin.qq.com/s?__biz=Mzg2NjkwNzU1Nw==&mid=2247485114&idx=1&sn=766302a0af17eccec95645f145485a7f&chksm=ce42e270f9356b66fae534e1add565bee10fd232db46137a34d6c24db0f8c1abdb042465c08c&token=2005173252&lang=zh_CN#rd" class="block shrink-0 ml-6">
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
              </a>
            </article>

            <!-- 2nd article -->
            <article class="flex items-center py-4 border-b border-gray-200">
              <div class="flex-grow">
                <header>
                  <h2 class="h4 mb-2">
                    <a href="https://mp.weixin.qq.com/s?__biz=Mzg2NjkwNzU1Nw==&mid=2247485072&idx=1&sn=b29b7e1816cc2e1c45083c3373bf4d0a&chksm=ce42e25af9356b4ca659ac23fd7564bc3fdf9fe94c8304c181015d0c92729f2f876544c1bff4&token=2005173252&lang=zh_CN#rd" class="hover:underline"
                      >{{ $t('news.w2UIv1.title') }}</a>
                  </h2>
                </header>
                <div class="text-lg text-gray-600 mb-4">
                  {{ $t('news.w2UIv1.summary') }}
                </div>
                <footer class="text-sm">
                  <div class="flex items-center">
                    <span class="text-gray-600">{{ $t('news.w2UIv1.date') }}</span>
                  </div>
                </footer>
              </div>
              <a href="https://mp.weixin.qq.com/s?__biz=Mzg2NjkwNzU1Nw==&mid=2247485072&idx=1&sn=b29b7e1816cc2e1c45083c3373bf4d0a&chksm=ce42e25af9356b4ca659ac23fd7564bc3fdf9fe94c8304c181015d0c92729f2f876544c1bff4&token=2005173252&lang=zh_CN#rd" class="block shrink-0 ml-6">
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
              </a>
            </article>

            <!-- 3rd article -->
            <article class="flex items-center py-4 border-b border-gray-200">
              <div class="flex-grow">
                <header>
                  <h2 class="h4 mb-2">
                    <a href="https://mp.weixin.qq.com/s/szZ6POtcMg2pQyEoT3-0pA" class="hover:underline"
                      >{{ $t('news.sum23.title') }}</a>
                  </h2>
                </header>
                <div class="text-lg text-gray-600 mb-4">
                  {{ $t('news.sum23.summary') }}
                </div>
                <footer class="text-sm">
                  <div class="flex items-center">
                    <span class="text-gray-600">{{ $t('news.sum23.date') }}</span>
                  </div>
                </footer>
              </div>
              <a href="https://mp.weixin.qq.com/s/szZ6POtcMg2pQyEoT3-0pA" class="block shrink-0 ml-6">
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
              </a>
            </article>
          </div>
        </div>

        <!-- See More -->
        <div class="max-w-2xl mx-auto mt-8 text-center">
          <p class="text-blue-600 mb-4">
            <router-link to="/blog" class="hover:underline"
            >{{ $t('viewMore') }}</router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectsBlog",
};
</script>

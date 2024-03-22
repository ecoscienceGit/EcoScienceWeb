<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <!-- Section header -->
        <div class="max-w-6xl mx-auto text-left pb-12 md:pb-20">
          <h2 class="h2 mb-4">新闻动态</h2>
        </div>

        <!-- Blog list -->
        <div class="md:flex md:justify-between">
          <div class="md:grow -mt-4">
            <!-- 1st article -->
            <article class="flex items-center py-4 border-b border-gray-200">
              <div>
                <header>
                  <h2 class="h4 mb-2">
                    <router-link to="/blog-post" class="hover:underline"
                      >第三期全国CE-QUAL-W2研习班圆满结束！</router-link
                    >
                  </h2>
                </header>
                <div class="text-lg text-gray-600 mb-4">
                  2023年7月15日-19日，在武汉举办的初阶（3天）及高阶（2天）水环境模型研习班圆满结束。本次研习班由陕西思益清源科技有限公司、湖北工业大学、加拿大滑铁卢大学共同承办，经过三年的积累与发展，我们呈现全新升级的培训内容，为参与者带来更丰富的学习体验与惊喜！
                </div>
                <footer class="text-sm">
                  <div class="flex items-center">
                    <span class="text-gray-600">2023年8月12日</span>
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

            <!-- 2nd article -->
            <article class="flex items-center py-4 border-b border-gray-200">
              <div>
                <header>
                  <h2 class="h4 mb-2">
                    <router-link to="/blog-post" class="hover:underline"
                      >思益清源2023上半年总结</router-link
                    >
                  </h2>
                </header>
                <div class="text-lg text-gray-600 mb-4">
                  亲爱的读者朋友们，回顾过去的半年，陕西思益清源科技有限公司在科研和合作领域取得了令人瞩目的成绩！让我们一起来看看我们的主要亮点和成就：
                </div>
                <footer class="text-sm">
                  <div class="flex items-center">
                    <span class="text-gray-600">2023年7月1日</span>
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

            <!-- 3rd article -->
            <article class="flex items-center py-4 border-b border-gray-200">
              <div>
                <header>
                  <h2 class="h4 mb-2">
                    <router-link to="/blog-post" class="hover:underline"
                      >第二期全国CE-QUAL-W2研习班圆满结束！</router-link
                    >
                  </h2>
                </header>
                <div class="text-lg text-gray-600 mb-4">
                  2019年8月16日-20日，为期5天（初阶班3 天，高阶班2天）的CE-QUAL-W2模型研习班圆满的结束了，本次培训课程依然由武汉善水清源环境科技有限公司承办。不同于第一期研习班的是，第二期W2研习班针对学员基础及学员需求将课程内容调整为初阶和高阶，以增加学员的吸收效率。5天满满当当的内容可谓是魔鬼训练！
                </div>
                <footer class="text-sm">
                  <div class="flex items-center">
                    <span class="text-gray-600">2019年9月26日</span>
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

        <!-- See More -->
        <div class="max-w-2xl mx-auto mt-8 text-center pb-12 md:pb-20">
          <p class="text-blue-600 mb-4">
            <router-link to="/blog" class="hover:underline"
            >查看更多</router-link>
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

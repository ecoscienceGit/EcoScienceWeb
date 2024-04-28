<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="max-w-3xl mx-auto lg:max-w-none">
          <article>
            <!-- Article header -->
            <header class="max-w-3xl mx-auto mb-20">
              <!-- Title -->
              <h1 class="h1 text-center mb-4">
                黄河流域古贤水利枢纽工程生态评估
              </h1>
            </header>

            <!-- Article content -->
            <div class="lg:flex lg:justify-between">
              <!-- Sidebar -->
              <aside class="relative hidden lg:block w-64 mr-20 shrink-0">
                <div class="sticky top-28">
                  <h4
                    class="text-lg font-bold leading-snug tracking-tight mb-4"
                  >
                    {{ $t("catalogs") }}
                  </h4>
                  <ul class="font-medium -my-1">
                    <li class="py-1">
                      <a
                        class="flex items-center hover:underline"
                        href="#introduction"
                      >
                        <svg
                          class="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z"
                          />
                        </svg>
                        <span>我们的技术亮点</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a
                        class="flex items-center hover:underline"
                        href="#general"
                      >
                        <svg
                          class="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z"
                          />
                        </svg>
                        <span>技术创新点</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a
                        class="flex items-center hover:underline"
                        href="#additional"
                      >
                        <svg
                          class="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z"
                          />
                        </svg>
                        <span>案例动图 </span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a
                        class="flex items-center hover:underline"
                        href="#conclusion"
                      >
                        <svg
                          class="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0"
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z"
                          />
                        </svg>
                        <span>服务价值</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>

              <!-- Main content -->
              <div>
                <img
                  class="w-full rounded"
                  src="/projects/images/guxian/guxianshow.jpg"
                  width="768"
                  height="432"
                  alt="Blog single"
                />
                <!-- Article body -->
                <div class="text-lg text-gray-600">
                  <h3
                    id="introduction"
                    class="h3 text-gray-900 mb-4"
                    style="scroll-margin-top: 100px"
                  >
                    我们的技术亮点
                  </h3>
                  <p class="mb-8" style="scroll-margin-top: 100px">
                    面对黄河流域的重大水利枢纽工程，我们的专业团队采取了创新的建模方法，致力于提供高精度的生态模拟服务。我们的服务不仅局限于基础的水库建模，更涵盖了水动力、水质模拟，以及
                    <strong class="font-medium text-gray-900"
                      >叶绿素和藻类生长</strong
                    >.
                    的动态模拟。通过这些综合性的模型分析，我们能够帮助工程决策者和环境管理者深入理解和预测工程对当地生态系统的具体影响。
                  </p>
                  <h3
                    id="general"
                    class="h3 text-gray-900 mb-4"
                    style="scroll-margin-top: 100px"
                  >
                    技术创新点
                  </h3>
                  <ul class="list-disc list-inside mb-8">
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900">水库建模</strong
                      >:
                      利用先进的GIS和水动力水质模拟技术，构建详尽的水库模型，确保模拟的准确性和可靠性。
                    </li>
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900"
                        >水动力水质模拟</strong
                      >: 综合考虑流速、温度、<strong
                        class="font-medium text-gray-900"
                        >沉积物</strong
                      >等因素，模拟水质变化及其对生态环境的影响。
                    </li>
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900"
                        >叶绿素与藻类生长模拟</strong
                      >:
                      通过生态模型分析光照、营养盐等因素对叶绿素浓度和藻类生长的影响，评估水体健康状况。
                    </li>
                  </ul>
                  <h3
                    id="additional"
                    class="h3 text-gray-900 mb-4"
                    style="scroll-margin-top: 100px"
                  >
                    案例动图
                  </h3>
                  <span>叶绿素生长模拟</span>
                  <figure class="mb-8">
                    <!-- <img
                      class="w-full rounded"
                      src="../images/news-single.jpg"
                      width="768"
                      height="432"
                      alt="Blog single"
                    /> -->
                    <video
                      class="w-full rounded"
                      controls
                      width="768"
                      height="432"
                    >
                      <source
                        src="/projects/images/guxian/Algal2year.mp4"
                        type="video/mp4"
                      />
                      您的浏览器不支持AVI视频。
                    </video>

                    <!-- 第二个AVI视频 -->
                    <span>藻类生长模拟</span>
                    <video
                      class="w-full rounded"
                      controls
                      width="768"
                      height="432"
                    >
                      <source
                        src="/projects/images/guxian/Chla2year.mp4"
                        type="video/mp4"
                      />
                      您的浏览器不支持AVI视频。
                    </video>
                  </figure>
                  <h3
                    id="conclusion"
                    class="h3 text-gray-900 mb-4"
                    style="scroll-margin-top: 100px"
                  >
                    服务价值
                  </h3>
                  <p>
                    通过我们的模拟服务，项目管理者可以获得关于水质变化、生态平衡以及环境风险的宝贵数据，进而做出更加明智的管理决策。这些数据不仅能够指导工程的执行，还能够预见和防控可能出现的环境问题，促进区域可持续发展。
                  </p>

                  <div>
                    <hr class="w-full h-px pt-px mt-8 bg-gray-200 border-0" />
                    <div class="mt-8">
                      了解细节或寻求更多技术合作
                      <a class="text-gray-900 underline" href="/contacts"
                        >点击该链接进行联系</a
                      >
                    </div>
                    <div class="mt-6">
                      <router-link
                        to="/projects"
                        class="inline-flex items-center text-base text-blue-600 font-medium hover:underline"
                      >
                        <svg
                          class="w-3 h-3 fill-current text-blue-400 shrink-0 mr-2"
                          viewBox="0 0 12 12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M.293 5.282L5 .5l1.414 1.436-3 3.048H12v2.032H3.414l3 3.048L5 11.5.293 6.718a1.027 1.027 0 010-1.436z"
                          />
                        </svg>
                        <span>{{ $t("back") }}</span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Article footer -->
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Guxian",
};
</script>

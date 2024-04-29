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
                湿沉降对南水北调中线工程干渠水质影响模拟研究
              </h1>
            </header>

            <!-- Article content -->
            <div class="lg:flex lg:justify-between">
              <!-- Sidebar -->
              <!-- <aside class="relative hidden lg:block w-64 mr-20 shrink-0">
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
                        <span>{{ $t("introduction") }}</span>
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
                        <span>技术概述</span>
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
                        <span>研究意义</span>
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
                        <span>合作与展望</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside> -->

              <!-- Main content -->
              <div>
                <!-- Article body -->
                <div class="text-lg text-gray-600">
                  <p
                    id="introduction"
                    class="mb-8"
                    style="scroll-margin-top: 100px"
                  >
                    南水北调中线工程，作为世界上最大的水利工程之一，对于改善我国北方地区水资源短缺的状况发挥着至关重要的作用。然而，沿途水质的保护与管理同样是项目成功实施的关键。我们公司通过模拟分析湿沉降——即大气中水分子携带污染物沉积到地面的过程——对干渠水质的影响，为中线工程建立大气-水动力水质模型，旨在为水质管理提供科学的策略与措施，确保水质安全，服务于社会和生态的可持续发展。
                  </p>

                  <figure class="mb-8">
                    <img
                      class="w-full rounded"
                      src="/projects/images/nanshuibeidiao/nanshuibeidiao.jpg"
                      width="768"
                      height="432"
                      alt="Blog single"
                    />
                  </figure>

                  <h3
                    id="general"
                    class="h3 text-gray-900 mb-4"
                    style="scroll-margin-top: 100px"
                  >
                    技术概述
                  </h3>
                  <p class="mb-8">
                    在本项目中，我们采用了先进的水质模拟软件（例如CE-QUAL-W2等）和技术，集成气象、水文和地理信息系统（GIS）数据，重点分析湿沉降如何影响中线工程干渠的水质。通过细致的模型构建，我们能够预测不同气象条件下，干渠内悬浮颗粒物、重金属以及有机污染物的变化趋势。
                  </p>

                  <h3
                    id="additional"
                    class="h3 text-gray-900 mb-4"
                    style="scroll-margin-top: 100px"
                  >
                    研究意义
                  </h3>
                  <p class="mb-8">
                    本研究将有助于科学预测和评估极端天气事件和变化的环境条件对中线工程水质的影响。研究成果不仅可以为南水北调中线工程的水质管理和保护提供决策支持，也可以为类似的大型水利工程提供宝贵的参考和经验。
                  </p>

                  <h3
                    id="conclusion"
                    class="h3 text-gray-900 mb-4"
                    style="scroll-margin-top: 100px"
                  >
                    合作与展望
                  </h3>
                  <p>
                    我们期待与政府部门、科研机构以及环境保护组织合作，共同探索和实施更有效的水质保护策略。
                  </p>

                  <div>
                    <hr class="w-full h-px pt-px mt-8 bg-gray-200 border-0" />
                    <div class="mt-8">
                      {{ $t("cooperation") }}
                      <a class="text-gray-900 underline" href="/contacts">{{
                        $t("connectWith")
                      }}</a
                      >.
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
  name: "Nanshuibeidiao",
};
</script>

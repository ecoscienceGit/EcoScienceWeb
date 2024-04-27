<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="max-w-3xl mx-auto lg:max-w-none">
          <article>
            <!-- Article header -->
            <header class="max-w-3xl mx-auto mb-20">
              <!-- Title -->
              <h1 class="h1 text-center mb-4">乌梁素海水动力模拟</h1>
            </header>

            <!-- Article content -->
            <div class="lg:flex lg:justify-between">
              <!-- Sidebar -->
              <aside class="relative hidden lg:block w-64 mr-20 shrink-0">
                <div class="sticky top-28">
                  <h4
                    class="text-lg font-bold leading-snug tracking-tight mb-4"
                  >
                    目录
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
                        <span>介绍</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>

              <!-- Main content -->
              <div>
                <!-- Article body -->
                <div class="text-lg text-gray-600">
                  <p
                    id="introduction"
                    class="mb-8"
                    style="scroll-margin-top: 100px"
                  ></p>
                  <div class="flex flex-col lg:flex-row lg:items-start">
                    <div class="lg:w-1/2 mb-8">
                      <p class="text-lg text-gray-600">
                        乌梁素海前身为黄河故道，属河成湖，湖面南北长35至40公里，东西宽5至10公里，面积约为293平方公里
                      </p>
                      <p class="text-lg text-gray-600 mb-8">
                        通过高精度的计算模拟来分析和预测乌梁素海这一内陆湖泊的水动力行为。乌梁素海位于中国内蒙古自治区，是一个重要的湿地生态系统，具有丰富的生物多样性和重要的生态功能。
                      </p>
                    </div>
                    <div class="lg:w-1/2 lg:pl-8">
                      <figure>
                        <img
                          class="rounded"
                          src="/projects/images/wuliangsuhai/wuliang.jpg"
                          alt="乌梁素海"
                          style="width: auto; max-height: 300px"
                        />
                      </figure>
                    </div>
                  </div>
                  <p class="mb-8">
                    我们利用自主研发的水动力模型以及数据库来模拟湖泊中水流的流速、流向以及湖泊水位的变化。这些模型通常基于水文学、气象学和物理学的数据，如湖泊的地形、气候条件、入湖和出湖水流的量等因素。
                  </p>
                  <p class="mb-8">
                    模拟还包括对湖泊内部的营养盐循环和污染物扩散进行可视化分析，以研究人类活动对湖泊水质的影响。通过这种模拟，研究人员可以预测在不同的环境管理策略下湖泊的水质和生态状况的变化，为湖泊的环境保护和可持续管理提供科学依据。
                  </p>

                  <div>
                    <hr class="w-full h-px pt-px mt-8 bg-gray-200 border-0" />
                    <div class="mt-8">
                      了解细节或寻求更多技术合作
                      <a class="text-gray-900 underline" href="/contacts"
                        >点击该链接进行联系</a
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
                        <span>返回</span>
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
  name: "Wuliangsuhai",
};
</script>

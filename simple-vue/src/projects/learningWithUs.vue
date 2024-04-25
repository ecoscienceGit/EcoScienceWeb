<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="max-w-3xl mx-auto lg:max-w-none">
          <article>
            <!-- Article header -->
            <header class="max-w-3xl mx-auto mb-20">
              <!-- Title -->
              <h1 class="h1 text-center mb-4">在线咨询服务 线上辅导模式</h1>
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
                        <span>Introduction</span>
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
                  >
                    我们公司提供多元化的咨询服务，其中包括但不限于数据模型构建、实习辅导、论文辅导等。作为我们业务的一部分，这些服务为客户提供了全面的支持和指导，帮助他们在各自领域取得成功。数据模型构建是我们的一项专长，我们能够根据客户的需求和具体情况，设计和开发各种类型的数据模型，为其业务提供可靠的支持和决策依据。此外，我们还提供实习辅导服务，为学生提供个性化的指导，帮助他们充分发挥潜力并在实习中取得成功。论文辅导也是我们的业务之一，我们的专业团队将为客户提供论文写作指导、修改建议和审查服务，确保其论文质量达到最高水平。无论客户的需求是什么，我们都致力于为他们提供最优质的咨询服务，以帮助他们实现目标并取得成功。
                  </p>
                  <div>
                    <hr class="w-full h-px pt-px mt-8 bg-gray-200 border-0" />
                    <div class="mt-8">
                      了解细节或寻求更多技术合作
                      <a class="text-gray-900 underline" href="#0"
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
  name: "LearningWithUs",
};
</script>

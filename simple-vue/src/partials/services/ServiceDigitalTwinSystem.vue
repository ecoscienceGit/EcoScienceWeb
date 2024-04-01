<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="max-w-3xl mx-auto lg:max-w-none">

          <article>

            <!-- Article header -->
            <header class="max-w-6xl mx-auto mb-20">
              <!-- Title -->
              <h2 class="h2 text-left mb-4">流域数值模拟与水质数字孪生化</h2>
            </header>

            <!-- Article content -->
            <div class="lg:flex lg:justify-between">

              <!-- Sidebar -->
              <aside class="relative hidden lg:block w-64 mr-20 shrink-0">
                <div class="sticky top-28">
                  <h4 class="text-lg font-bold leading-snug tracking-tight mb-4">目录</h4>
                  <ul class="font-medium -my-1">
                    <li class="py-1">
                      <a class="flex items-center hover:underline" href="#">
                        <svg class="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                        </svg>
                        <span>简介</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a class="flex items-center hover:underline" href="#tech">
                        <svg class="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                        </svg>
                        <span>专业技术</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a class="flex items-center hover:underline" href="#range">
                        <svg class="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                        </svg>
                        <span>数字孪生化服务范围</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a class="flex items-center hover:underline" href="#application">
                        <svg class="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                        </svg>
                        <span>高级技术融合</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a class="flex items-center hover:underline" href="#model">
                        <svg class="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                        </svg>
                        <span>模型编译和可视化服务</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>

              <!-- Main content -->
              <div>

                <!-- Article body -->
                <div class="text-lg text-gray-600">
                  <p class="mb-8">
                    思益清源提供先进的流域数值模拟和水质数字孪生化服务，助力水资源的可持续管理与保护。
                  </p>

                  <h4 id="tech" class="h4 text-gray-900 mt-16 mb-4" style="scroll-margin-top: 100px">专业技术</h4>
                  <ul class="max-w-3xl mx-auto mb-8 pl-12 text-gray-900">
                    <Accordion title="SWAT">
                      流域尺度模型，用来模拟和分析水土流失、面源污染和农业管理等问题。
                    </Accordion>
                    <Accordion title="EFDC">
                      涵盖一维、二维、三维模拟，流场、物质运输、污染物迁移转化。
                    </Accordion>
                    <Accordion title="CE-QUAL-W2">
                      适用于河流湖库等的立面二维模型，对于水库淹没范围、生态流量、栖息地、水体富营养化等都有很好的模拟效果。
                    </Accordion>
                    <Accordion title="MIKE 11">
                      一维河流模型，河流、洪泛平原、灌溉渠道、水库等内陆水体的流动和水位、水质和沉积物运输。
                    </Accordion>
                    <span class="block border-t border-gray-200" aria-hidden="true"></span>
                  </ul>

                  <h4 id="range" class="h4 text-gray-900 mt-16 mb-4" style="scroll-margin-top: 100px">数字孪生化服务范围</h4>
                  <p class="mb-8">我们的数字孪生化技术能够对长江流域、黄河流域等重要水系的水动力和水质进行深入研究，构建准确的数字孪生模型。</p>
                  <figure class="mb-8 mt-8">
                    <img class="w-3/5 rounded ms-auto" src="../../images/digital-twin-system-01.png" width="768" height="432" alt="Digital Twin System 01" />
                  </figure>
                  <h5 class="h5 text-gray-900 mt-8 mb-4">我们能实现:</h5>
                  <ul class="list-disc list-inside mb-8">
                    <li class="mb-1">
                      水质参数（如叶绿素、BOD、溶解氧和营养盐）的<strong class="font-medium text-gray-900">实时模拟和分析</strong>；
                    </li>
                    <li class="mb-1">
                      提供有效的<strong class="font-medium text-gray-900">预测预警系统</strong>，帮助管理者及时响应水环境变化；
                    </li>
                    <li class="mb-1">
                      致力于使用最先进的技术，为您提供<strong class="font-medium text-gray-900">全面、高效</strong>的水环境监测和管理解决方案。
                    </li>
                  </ul>

                  <h4 id="application" class="h4 text-gray-900 mt-16 mb-4" style="scroll-margin-top: 100px">高级技术融合</h4>
                  <p class="mb-8">我们不仅掌握单一模型，更能将 SWAT, CE-QUAL-W2, EFDC, MIKE 11 等多个模型进行有效耦合。这种融合方式提高了模型的适应性和精确度，能够针对复杂的水环境问题提供更全面的分析和解决方案。</p>
                  <ul class="list-disc list-inside mb-8">
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900">软件开发，云端开发与用户界面</strong>：团队精通 Python 和 Java 等编程语言，正在开发用户友好的软件界面。提供技术服务的同时，让客户能够轻松管理和分析模型数据。
                    </li>
                    <li class="mb-8">
                      <strong class="font-medium text-gray-900">定制化服务与支持</strong>：数据分析、模型调整还是用户界面设计，我们都能根据客户的具体需求进行量身定制。
                    </li>
                  </ul>

                  <h4 id="model" class="h4 text-gray-900 mt-16 mb-4" style="scroll-margin-top: 100px">模型编译和可视化服务</h4>
                  <p class="mb-8">我们的专业团队利用最新的数值模拟技术，提供从<strong class="font-medium text-gray-900">一维到三维的模型编译和可视化</strong>服务。无论是简单的河流流动模拟，还是复杂的湖泊生态系统分析，我们都能提供精确、直观的解决方案。</p>
                  <p class="mb-8">接下来我们提供一些简单的理想示例：</p>
                  <ul class="list-disc list-inside mb-8">
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900">一维：</strong>
                      <figure class="mb-8 mt-8">
                        <img class="w-4/5 rounded" src="../../images/digital-twin-system-02.png" width="768" height="432" alt="Digital Twin System 02" />
                      </figure>
                      <figure class="mb-8 mt-8">
                        <img class="w-full rounded" src="../../images/digital-twin-system-03.png" width="768" height="432" alt="Digital Twin System 03" />
                      </figure>
                    </li>
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900">二维：</strong>
                      <p class="mt-8 mb-1"><strong class="font-medium text-gray-900">热图（Heatmaps）</strong>：用于展示水质参数（如温度、盐度、污染物浓度等）在二维平面上的分布。</p>
                      <p class="mb-1"><strong class="font-medium text-gray-900">矢量场图（Vector Field Plots）</strong>：显示变量的方向和强度。每个矢量代表水流在特定点的方向和速度。</p>
                      <p class="mb-1"><strong class="font-medium text-gray-900">等高线图（Contour Plots）</strong>：用于展示变量在二维平面上的等值线，例如水深或流速。</p>
                      <figure class="mb-8 mt-8">
                        <img class="w-3/5 rounded" src="../../images/digital-twin-system-04.png" width="768" height="432" alt="Digital Twin System 04" />
                      </figure>
                      <figure class="mb-8 mt-8">
                        <img class="w-4/5 rounded" src="../../images/digital-twin-system-05.png" width="768" height="432" alt="Digital Twin System 05" />
                      </figure>
                    </li>
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900">三维：</strong>
                      <p class="mt-8 mb-1"><strong class="font-medium text-gray-900">三维曲面图（3D Surface Plots）</strong>：显示变量在三维空间中的变化，如水深或温度随地理位置和深度的变化。</p>
                      <p class="mb-1"><strong class="font-medium text-gray-900">三维矢量场图（3D Vector Field Plots）</strong>：用于展示变量在三维空间中的方向和强度。</p>
                      <figure class="mb-8 mt-8">
                        <img class="w-4/5 rounded" src="../../images/digital-twin-system-06.png" width="768" height="432" alt="Digital Twin System 06" />
                      </figure>
                      <figure class="mb-8 mt-8">
                        <img class="w-4/5 rounded" src="../../images/digital-twin-system-07.png" width="768" height="432" alt="Digital Twin System 07" />
                      </figure>
                    </li>
                  </ul>

                  <p class="mb-8">通过理论模型与实际应用的结合，思益清源致力于将复杂的技术转化为<strong class="font-medium text-gray-900">简单、直观的工具</strong>。我们的目标是帮助您更有效地管理和保护宝贵的水资源。</p>
                  <p class="mb-8">联系我们，一起探索水资源管理的未来！</p>

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
import Accordion from './../../utils/Accordion.vue'

export default {
  name: 'ServiceDigitalTwinSystem',
  components: {
    Accordion,
  },
}
</script>
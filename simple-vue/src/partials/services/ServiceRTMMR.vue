<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="max-w-3xl mx-auto lg:max-w-none">

          <article>

            <!-- Article header -->
            <header class="max-w-6xl mx-auto mb-20">
              <!-- Title -->
              <h2 class="h2 text-left mb-4">反应运移-机理简化（RTM-MR ） 耦合建模方法</h2>
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
                      <a class="flex items-center hover:underline" href="#advantages">
                        <svg class="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                        </svg>
                        <span>RTM-MR耦合方法优势</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a class="flex items-center hover:underline" href="#applications">
                        <svg class="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                        </svg>
                        <span>RTM-MR应用场景介绍</span>
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
                    RTM-MR耦合方法是由加拿大滑铁卢大学，意大利米兰理工大学，中国地质大学，以及陕西思益清源科技有限公司联手合作的<strong class="font-medium text-gray-900">国内首个</strong>面向复杂环境过程的数值仿真方法。
                    RTM-MR耦合方法对于<strong class="font-medium text-gray-900">矿山修复、土壤-地下水污染治理</strong>等涉及复杂反应系统的环境过程的数值仿真，在模拟精度和计算效率上具有得天独厚的优势。
                  </p>
                  <h4 id="advantages" class="h4 text-gray-900 mb-4">RTM-MR耦合方法优势</h4>
                  <ul class="list-disc list-inside mb-8">
                    <li class="mb-1"><strong class="font-medium text-gray-900">精细的反应建模</strong>: 拥有庞大的反应数据库，能够实现对水体或土壤中的营养元素循环、重金属迁移转化、污染物降解等反应依赖的环境过程的高精度模拟。</li>
                    <li class="mb-1"><strong class="font-medium text-gray-900">高效的计算过程</strong>: 反应过程和流体间具有自适应接口，能够根据模拟场景的主要特征生成最优化的数值模拟方案。</li>
                  </ul>
                  <h4 id="applications" class="h4 text-gray-900 mb-4">RTM-MR应用场景介绍</h4>
                  <p class="mb-8">
                    一、地表-地下水体或土壤中的特定环境过程(氮磷循环、碳排放、重金属吸附/解吸、有机质降解等)或特定物种（特定物种或特定元素、生物质等）的量化和预测。
                  </p>
                  <figure class="mb-8">
                    <img class="w-full rounded" src="../../images/rtmmr-01.png" width="768" height="432" alt="RTM-MR 01" />
                  </figure>
                  <p class="mb-8">
                    二、水体、土壤或综合污染场地的修复工艺（原位药剂注入、循环井、反应墙或异位修复等）参数优化。
                  </p>
                  <figure class="mb-8">
                    <img class="w-full rounded" src="../../images/rtmmr-02.png" width="768" height="432" alt="RTM-MR 02" />
                  </figure>
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
  name: 'ServiceRTMMR',
}
</script>
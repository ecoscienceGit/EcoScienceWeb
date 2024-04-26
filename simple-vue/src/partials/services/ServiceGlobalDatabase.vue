<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="max-w-3xl mx-auto lg:max-w-none">

          <article>

            <!-- Article header -->
            <header class="max-w-6xl mx-auto mb-20">
              <!-- Title -->
              <h2 class="h2 text-left mb-4">全球综合数据库</h2>
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
                      <a class="flex items-center hover:underline" href="#intro">
                        <svg class="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                        </svg>
                        <span>公司数据库介绍</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a class="flex items-center hover:underline" href="#main">
                        <svg class="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                        </svg>
                        <span>主要数据集简介</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a class="flex items-center hover:underline" href="#sample">
                        <svg class="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                        </svg>
                        <span>部分全球数据展示</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a class="flex items-center hover:underline" href="#application">
                        <svg class="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                        </svg>
                        <span>数据库应用</span>
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
                    公司在提供不同环境业务的服务基础上，提供并维护各种环境、水动力、水质模型（CE-QUAL-W2, EFDC, MIKE等）、地下水模型（例如Hydrogeosphere，MODFLOW等）、矿山修复（RTM模型）、燃烧、碳排放模型可直接使用的全球范围，综合的数据库。数据库包含全球气象数据、水流流量数据、水温数据、大坝及水库数据。
                  </p>
                  <ul class="max-w-3xl mx-auto mb-8 pl-12 text-gray-900">
                    <Accordion title="全球气象数据">
                      精确到1940年至今200+气象变量的每小时数据，例如不同高度的气温，风速，风向，气压，云层，太阳辐射，土壤等等信息。
                    </Accordion>
                    <Accordion title="水流流量数据">
                      精确到1901年至今的全球数据。
                    </Accordion>
                    <Accordion title="水温数据">
                      精确到1979年至今的全球尺度的水温数据。
                    </Accordion>
                    <Accordion title="大坝及水库数据">
                      包含全球主要大坝以及水库的数据。
                    </Accordion>
                    <span class="block border-t border-gray-200" aria-hidden="true"></span>
                  </ul>
                  <p class="mb-8">
                    此外，公司的数据库结合人工智能的技术（例如最新的ChatGPT会员服务以及未来的人工智能，大数据技术），为广大高校，科研所的小伙伴们提供便捷，稳定，迅速的建模以及文稿总结等服务（详见数据库应用）。
                  </p>

                  <h4 id="intro" class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">公司数据库介绍</h4>
                  <p class="mb-8">
                    公司在全球以及自己数据库基础上，用大数据，人工智能，数据融合等方法开发了完整的智能数据库使用体系。并有了相应的科研论文以及发明专利，软件著作。全球气象数据在西方国家有良好的数据库以及发展维护。
                  </p>
                  <p class="text-gray-900">
                    例如:
                  </p>
                  <div class="max-w-6xl mx-auto px-4 sm:px-6">
                    <div class="py-12 md:py-16 ">
                      <!-- Items -->
                      <div class="relative max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
                        <div class="absolute top-1/2 w-full h-1 bg-gradient-to-r from-blue-500 to-teal-300 hidden lg:block" aria-hidden="true"></div>
              
                        <!-- 1st item -->
                        <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                          <div class="flex justify-center items-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold mb-3">1</div>
                          <h4 class="text-xl font-bold leading-snug tracking-tight mb-1 text-center">欧洲天气预报中心（ECMWF）</h4>
                          <p class="text-gray-600 text-center">是一个包括34个国家支持的国际性组织，是当今全球独树一帜的国际性天气预报研究和业务机构。</p>
                        </div>
              
                        <!-- 2nd item -->
                        <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                          <div class="flex justify-center items-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold mb-3">2</div>
                          <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">ECMWF使用</h4>
                          <p class="text-gray-600 text-center">定期使用其预测模型和数据同化系统来“重新分析”已存档的观测值。</p>
                        </div>
              
                        <!-- 3rd item -->
                        <div class="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
                          <div class="flex justify-center items-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold mb-3">3</div>
                          <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">构建全球数据集</h4>
                          <p class="text-gray-600 text-center">创建描述大气，陆地和海洋近期历史的全球数据集。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="mb-8">
                    ECMWF气候再分析始于20世纪80年代产生的FGGE再分析，接着是ERA-15、ERA-40和最近的ERA-Interim 和 ERA5。从全球现有的所有数据库来看，目前ECMWF的数值预报结果是公认的世界领先数据。
                  </p>
                  <p class="mb-8">
                    公司将其模型数据与来自世界各地的观测数据结合起来，形成一个全球完整的、一致的数据集。在ECMWF的基础上整合其他数据库的信息。
                  </p>
                  <p class="mb-8 text-gray-900">
                    例如:
                  </p>
                  <ul class="list-disc list-inside mb-8">
                    <li class="mb-1">GPCC(全球大气降水)、WorldClimate</li>
                    <li class="mb-1">NOAA(美国国家海洋和大气管理局)</li>
                    <li class="mb-1">CRU(英国气候研究中心数据库)</li>
                    <li class="mb-1">CMIP(全球大气海洋耦合数据)、GHCN(全球大气历史数据)</li>
                  </ul>
                  <p class="mb-8">
                    并使用大数据分析，人工智能，多线程的智能方法将数据库信息与公司业务在不同领域进行了整合、集成。
                  </p>
                  <p class="mb-8">
                    公司的水环境模型以及其它业务模型结合全球的气象数据（从1940年至今的小时数据，有气温，风速，风向，云层，太阳辐射，气压，降雨等等的信息），以及全球的水温，水流，大坝，水库的地形数据以及其它关键参数，原创建立了一套独有的数据库系统，为水动力水质模型的构建提供了强有力的数据支撑，有效解决国内现有实测数据时间序列短、频率不足等问题。并且为预测，监测等相关的环境领域提供强有力的智能大数据支撑。
                  </p>

                  <h4 id="main" class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">主要数据集简介</h4>
                  <p class="mb-8">
                    总共240+数据变量:
                  </p>
                  <figure class="mb-8">
                    <img class="w-full rounded" src="../../images/database-01.png" width="768" height="432" alt="Global Database 01" />
                  </figure>
                  
                  <h4 id="sample" class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">部分全球数据展示</h4>
                  <p class="mb-8">
                    1963年1月全球2m气温月平均数据:
                  </p>
                  <figure class="mb-8">
                    <img class="w-4/5 rounded" src="../../images/database-02.png" width="768" height="432" alt="Global Database 02" />
                  </figure>
                  <p class="mb-8">
                    2019年1月全球海拔100m处风速_U月平均:
                  </p>
                  <figure class="mb-8">
                    <img class="w-4/5 rounded" src="../../images/database-03.png" width="768" height="432" alt="Global Database 03" />
                  </figure>

                  <h4 id="application" class="h4 text-gray-900 mb-4" style="scroll-margin-top: 100px">数据库的应用以及实测对比</h4>
                  <p class="mb-8">
                    公司数据库可以对国内现有环境领域数据不足、不易获取、缺失等问题进行有效补充，参考以及分析使用。为不同领域的环境咨询以及研究给予稳定、全面的大数据支撑。
                  </p>
                  <p class="mb-8 text-gray-900">
                    例如:
                  </p>
                  <ul class="list-disc list-inside mb-8">
                    <li class="mb-1">思益清源全球综合数据库可以结合各种城市，水质水动力模型 (CE-QUAL-W2, EFDC, MIKE，SWAT, SWMM等等) 为相关领域的小伙伴建立稳定的数据支撑；</li>
                    <li class="mb-1">思益清源全球综合数据库结合各种GIS数据集，为矿山修复的运移反应模型，地下水模型（Hydrogeosphere, MODFLOW等等）提供全面的，准确的，有效的数据支撑；</li>
                    <li class="mb-1">思益清源全球综合数据库为各种碳循环，碳排放，燃烧模型提供有效，可靠的数据，参数支撑(例如，修正涡耗散概念模型)</li>
                  </ul>
                  <p class="mb-8">
                    数据库数据与实测气象站数据对比:
                  </p>
                  <figure class="mb-8">
                    <img class="w-4/5 rounded" src="../../images/database-04.png" width="768" height="432" alt="Global Database 04" />
                  </figure>
                  <p class="mb-8">
                    数据库天尺度的数据很好的再现了气象站每小时尺度的数据。数据库拥有全球尺度的km级数据。很好弥补了气象站不足，缺失等问题，并且每一个数据库的数据都可按需求生成成模型可用的数据文件。
                  </p>
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
  name: 'ServiceGlobalDatabase',
  components: {
    Accordion,
  },
}
</script>
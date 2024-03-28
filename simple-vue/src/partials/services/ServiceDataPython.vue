<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="max-w-3xl mx-auto lg:max-w-none">

          <article>

            <!-- Article header -->
            <header class="max-w-6xl mx-auto mb-20">
              <!-- Title -->
              <h2 class="h2 text-left mb-4">Python大数据处理与数据挖掘</h2>
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
                      <a class="flex items-center hover:underline" href="#file">
                        <svg class="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                        </svg>
                        <span>文件合并与拆分</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a class="flex items-center hover:underline" href="#preprocessing">
                        <svg class="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                        </svg>
                        <span>数据预处理</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a class="flex items-center hover:underline" href="#analysis">
                        <svg class="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                        </svg>
                        <span>数据特征分析</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a class="flex items-center hover:underline" href="#ml">
                        <svg class="w-4 h-4 fill-current text-gray-400 mr-3 shrink-0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.3 8.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM7.3 14.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0zM.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0z" />
                        </svg>
                        <span>机器学习</span>
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
                    Python是一种高级的、面向对象的编程语言，具有内置的数据结构和动态语义。拥有一系列用于数据操作、统计计算、Web开发、机器学习和数据科学的库、包、框架和模块，允许程序模块化和代码重用，语法简单、计算高效，在数据处理、数据挖掘方面具有较大优势。
                  </p>
                  <h4 id="file" class="h4 text-gray-900 mt-16 mb-4">文件合并与拆分</h4>
                  <p class="mb-8">
                    实际数据可能在不同的文件中保存，而建模分析时需要读取所有数据，这时需要将所有文档<strong class="font-medium text-gray-900">合并</strong>到一个文件中；或者对于数据量比较大的文件，直接读取或者打开比较困难，这时需要<strong class="font-medium text-gray-900">拆分</strong>数据。
                  </p>
                  <p class="mb-8">以合并多个csv为例:</p>
                  <figure class="mb-8">
                    <img class="w-4/5 rounded" src="../../images/data-python-01.png" width="768" height="432" alt="Data Python 01" />
                  </figure>

                  <h4 id="preprocessing" class="h4 text-gray-900 mt-16 mb-4">数据预处理</h4>
                  <p class="mb-8">包括数据读取、缺失值处理、异常值处理、描述性变量转换为数值型、训练集测试集划分、数据规范化等。</p>
                  <ul class="list-disc list-inside mb-8">
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900">文件读取</strong>: 
                      <figure class="mb-8 mt-8">
                        <img class="w-4/5 rounded" src="../../images/data-python-02.png" width="768" height="432" alt="Data Python 02" />
                      </figure>
                    </li>
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900">缺失值查看</strong>: 
                      <figure class="mb-8 mt-8">
                        <img class="w-full rounded" src="../../images/data-python-03.png" width="768" height="432" alt="Data Python 03" />
                      </figure>
                    </li>
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900">异常值检测</strong>: 
                      <figure class="mb-8 mt-8">
                        <img class="w-3/5 rounded" src="../../images/data-python-04.png" width="768" height="432" alt="Data Python 04" />
                      </figure>
                    </li>
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900">数据规范化</strong>: 
                      <figure class="mb-8 mt-8">
                        <img class="w-4/5 rounded" src="../../images/data-python-05.png" width="768" height="432" alt="Data Python 05" />
                      </figure>
                    </li>
                  </ul>

                  <h4 id="analysis" class="h4 text-gray-900 mt-16 mb-4">数据特征分析</h4>
                  <ul class="list-disc list-inside mb-8">
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900">分布分析</strong>：分布分析能揭示数据的分布特征和分布类型。对于定量分类数据，可通过绘制频率分布表，绘制频率分布直方图，绘制茎叶图进行直观的分析，对于定性分类数据，可用于图饼和条形图直观的显示分布情况。
                      <figure class="mb-8 mt-8">
                        <img class="w-3/5 rounded" src="../../images/data-python-06.png" width="768" height="432" alt="Data Python 06" />
                      </figure>
                    </li>
                    <li class="mb-8">
                      <strong class="font-medium text-gray-900">统计量分析</strong>：用于统计指标对于定量数据进行统计描述，常从集中/离散趋势两个方面进行分析。常用均值、标准差、分位数、极差等表示。
                    </li>
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900">相关性分析</strong>：分析连续变量之间线性相关程度的强弱，并用于适当的统计指标表示出来的过程称为相关分析。可绘制散点图、矩阵图、计算相关系数等，来准确地描述变量之间线性相关程度。
                      <figure class="mb-8 mt-8">
                        <img class="w-4/5 rounded" src="../../images/data-python-07.png" width="768" height="432" alt="Data Python 07" />
                      </figure>
                    </li>
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900">主成分分析</strong>：多元统计分析，用于减少数据集的维数，同时保持数据集中的对方差贡献最大的特征。
                      <figure class="mb-8 mt-8">
                        <img class="w-full rounded" src="../../images/data-python-08.png" width="768" height="432" alt="Data Python 08" />
                      </figure>
                    </li>
                  </ul>

                  <h4 id="ml" class="h4 text-gray-900 mt-16 mb-4">机器学习</h4>
                  <ul class="list-disc list-inside mb-8">
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900">分类/聚类</strong>：对具有相同或相似属性的数据进行划分等，常用算法有随机森林、KNN算法、贝叶斯算法、决策树算法、逻辑回归算法和SVM算法等。
                      <figure class="mb-8 mt-8">
                        <img class="w-4/5 rounded" src="../../images/data-python-09.png" width="768" height="432" alt="Data Python 09" />
                      </figure>
                    </li>
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900">回归</strong>：筛选重要变量，对未来数据进行预测模拟等。
                      <figure class="mb-8 mt-8">
                        <img class="w-4/5 rounded" src="../../images/data-python-10.png" width="768" height="432" alt="Data Python 10" />
                      </figure>
                      <figure class="mb-8">
                        <img class="w-3/4 rounded" src="../../images/data-python-11.png" width="768" height="432" alt="Data Python 11" />
                      </figure>
                    </li>
                  </ul>

                  <div>
                    <hr class="w-full h-px pt-px mt-8 bg-gray-200 border-0" />
                    <div class="mt-8 text-sm">
                      参考文献: 
                      <p>1. Migliavacca M, Musavi T, Mahecha M D, et al. The three major axes of terrestrial ecosystem function[J]. Nature, 2021, 598(7881): 468-472.</p>
                      <p>2. Zhang J, Zhang N, Liu Y, et al. Root microbiota shift in rice correlates with resident time in the field and developmental stage. Science China-life Sciences, 2018, 61(6): 613-621.</p>
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
  name: 'ServiceDataPython',
}
</script>
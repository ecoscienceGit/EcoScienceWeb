<template>
  <section class="relative">

    <!-- Section background (needs .relative class on parent and next sibling elements) -->
    <div class="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <!-- Section header -->
        <div class="max-w-6xl mx-auto text-left pb-12 md:pb-20">
          <h2 class="h2 mb-4">{{ $t('about') }}</h2>
          <p class="text-xl text-gray-600">陕西思益清源科技有限公司致力于为水质、水动力、燃烧节能减排建模领域提供高质量的咨询和服务。我们始终秉持着 “科技赋能自然，共建洁净世界 ”的信念，紧跟科技发展和创新趋势，将先进的大数据分析、人工智能技术，与水资源、水质管理相结合，为客户提供高效智能的解决方案。我们的目标是通过引入智能技术，提升水资源利用效率、减少浪费和污染，促进可持续发展。在不断创新和进步的过程中，我们努力提高技术水平和服务质量，以满足客户和行业需求。</p>
        </div>

        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesAbout',
}
</script>
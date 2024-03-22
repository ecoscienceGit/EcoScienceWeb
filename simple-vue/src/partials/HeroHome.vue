<template>
  <section class="relative">

    <!-- Illustration behind hero content -->
    <div class="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
      <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
            <stop stop-color="#FFF" offset="0%" />
            <stop stop-color="#EAEAEA" offset="77.402%" />
            <stop stop-color="#DFDFDF" offset="100%" />
          </linearGradient>
        </defs>
        <g fill="url(#illustration-01)" fill-rule="evenodd">
          <circle cx="1232" cy="128" r="128" />
          <circle cx="155" cy="443" r="64" />
        </g>
      </svg>
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <!-- Hero content -->
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">

        <!-- Section header -->
        <div class="text-center pb-12 md:pb-16">
          <h1 class="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"><span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">智造绿色未来</span></h1>
          <div class="max-w-3xl mx-auto">
            <p class="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">陕西思益清源科技有限公司致力于为水质、水动力、燃烧节能减排建模领域提供高质量的咨询和服务。我们始终秉持着 “科技赋能自然，共建洁净世界 ”的信念，紧跟科技发展和创新趋势，将先进的大数据分析、人工智能技术，与水资源、水质管理相结合，为客户提供高效智能的解决方案。</p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroHome',
}
</script>
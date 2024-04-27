<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-200">

        <!-- Section header -->
        <div class="max-w-6xl mx-auto text-left pb-12 md:pb-16">
          <h2 class="h2 mb-4">{{ $t('about.qualificationsHonors') }}</h2>
          <p class="text-xl text-gray-600"></p>
        </div>

        <!-- Items -->
        <div class="max-w-sm mx-auto grid gap-8 md:gap-16 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-5xl pt-8 md:pt-12">

          <!-- 1st item -->
          <div class="text-center">
            <div class="h3 mb-1">20+</div>
            <div class="text-gray-600">{{ $t('about.stat.team') }}</div>
          </div>

          <!-- 2nd item -->
          <div class="text-center">
            <div class="h3 mb-1">15+</div>
            <div class="text-gray-600">{{ $t('about.stat.patent') }}</div>
          </div>

          <!-- 3rd item -->
          <div class="text-center">
            <div class="h3 mb-1">15+</div>
            <div class="text-gray-600">{{ $t('about.stat.cooperator') }}</div>
          </div>

          <!-- 4th item -->
          <div class="text-center">
            <div class="h3 mb-1">50+</div>
            <div class="text-gray-600">{{ $t('about.stat.admission') }}</div>
          </div>

          <!-- 5th item -->
          <div class="text-center">
            <div class="h3 mb-1">10+</div>
            <div class="text-gray-600">{{ $t('about.stat.market') }}</div>
          </div>

          <!-- 6th item -->
          <div class="text-center">
            <div class="h3 mb-1">{{ '140' + $t('about.stat.million') + '+' }}</div>
            <div class="text-gray-600">{{ $t('about.stat.database') }}</div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutStats',
}
</script>
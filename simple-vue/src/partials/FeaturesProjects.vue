<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-12">

        <!-- Section header -->
        <div class="max-w-6xl mx-auto text-left pb-12 md:pb-20">
          <h2 class="h2">{{ $t('projects') }}</h2>
        </div>

        <!-- Articles list -->
        <div class="max-w-sm mx-auto md:max-w-none">
          <div class="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">

            <!-- 1st article -->
            <article class="flex flex-col h-full mb-8" data-aos="zoom-y-out">
              <header>
                <router-link to="/project-post/guxian" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out" src="/projects/images/guxian/cover.jpg" width="352" height="198" alt="Project 01" />
                  </figure>
                </router-link>
                <h3 class="text-xl font-bold leading-snug tracking-tight">
                  <router-link to="/project-post/guxian" class="hover:underline">{{ $t('project.huanghe') }}</router-link>
                </h3>
              </header>
            </article>

            <!-- 2nd article -->
            <article class="flex flex-col h-full" data-aos="zoom-y-out" data-aos-delay="150">
              <header>
                <router-link to="/project-post/wuliangsuhai" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 translate-z-0 hover:-translate-y-1 transition duration-700 ease-out" src="/projects/images/wuliangsuhai/cover.jpg" width="352" height="198" alt="Project 02" />
                  </figure>
                </router-link>
                <h3 class="text-xl font-bold leading-snug tracking-tight">
                  <router-link to="/project-post/wuliangsuhai" class="hover:underline">{{ $t('project.wuliangsu') }}</router-link>
                </h3>
              </header>
            </article>

            <!-- 3rd article -->
            <article class="flex flex-col h-full" data-aos="zoom-y-out" data-aos-delay="300">
              <header>
                <router-link :to="`/project-post/nanshuibeidiao`" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 translate-z-0 hover:-translate-y-1 transition duration-700 ease-out" src="/projects/images/nanshuibeidiao/cover.jpg" width="352" height="198" alt="News 03" />
                  </figure>
                </router-link>
                <h3 class="text-xl font-bold leading-snug tracking-tight">
                  <router-link to="/project-post/nanshuibeidiao" class="hover:underline">{{ $t('project.nanshui') }}</router-link>
                </h3>
              </header>
            </article>

            <!-- 4th article -->
            <article class="flex flex-col h-full" data-aos="zoom-y-out" data-aos-delay="300">
              <header>
                <router-link to="/project-post/yanxiban" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 translate-z-0 hover:-translate-y-1 transition duration-700 ease-out" src="/projects/images/yanxiban/cover.jpg" width="352" height="198" alt="Project 04" />
                  </figure>
                </router-link>
                <h3 class="text-xl font-bold leading-snug tracking-tight">
                  <router-link to="/project-post/yanxiban" class="hover:underline">{{ $t('project.training') }}</router-link>
                </h3>
              </header>
            </article>

            <!-- 5th article -->
            <article class="flex flex-col h-full" data-aos="zoom-y-out" data-aos-delay="300">
              <header>
                <router-link to="/project-post/competition" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 translate-z-0 hover:-translate-y-1 transition duration-700 ease-out" src="/projects/images/competition/cover.jpg" width="352" height="198" alt="Project 05" />
                  </figure>
                </router-link>
                <h3 class="text-xl font-bold leading-snug tracking-tight">
                  <router-link to="/project-post/competition" class="hover:underline">{{ $t('project.models') }}</router-link>
                </h3>
              </header>
            </article>

            <!-- 6th article -->
            <article class="flex flex-col h-full" data-aos="zoom-y-out" data-aos-delay="300">
              <header>
                <router-link to="/project-post/learningWithUs" class="block mb-6">
                  <figure class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded">
                    <img class="absolute inset-0 w-full h-full object-cover transform scale-105 translate-z-0 hover:-translate-y-1 transition duration-700 ease-out" src="/projects/images/learningWithUs/cover.jpg" width="352" height="198" alt="Project 06" />
                  </figure>
                </router-link>
                <h3 class="text-xl font-bold leading-snug tracking-tight">
                  <router-link to="/project-post/learningWithUs" class="hover:underline">{{ $t('project.consultation') }}</router-link>
                </h3>
              </header>
            </article>

          </div>
        </div>

        <!-- See More-->
        <div class="max-w-6xl mx-auto mt-8 text-center border-t border-gray-200">
          <p class="text-blue-600 mt-8">
            <router-link to="/projects" class="hover:underline"
            >{{ $t('viewMore') }}</router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FeaturesProjects',
}
</script>
<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="max-w-3xl mx-auto lg:max-w-none">
          <article>
            <!-- Article header -->
            <header class="max-w-3xl mx-auto mb-20">
              <!-- Title -->
              <h1 class="h1 text-center mb-4">
                {{ $t("project.wuliangsu.title") }}
              </h1>
            </header>

            <!-- Article content -->
            <div class="lg:flex lg:justify-between">
              <!-- Sidebar -->
              <!-- <aside class="relative hidden lg:block w-64 mr-20 shrink-0">
                <div class="sticky top-28">
                  <h4
                    class="text-lg font-bold leading-snug tracking-tight mb-4"
                  >
                    {{ $t("catalogs") }}
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
                        <span>{{ $t("introduction") }}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside> -->

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
                        {{ $t("project.wuliangsu.p1") }}
                      </p>
                      <p class="text-lg text-gray-600 mb-8">
                        {{ $t("project.wuliangsu.p2") }}
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
                    {{ $t("project.wuliangsu.p3") }}
                  </p>
                  <figure class="mb-8">
                    <img
                      class="w-full rounded"
                      src="/projects/images/wuliangsuhai/wuliangsu.jpg"
                      width="768"
                      height="432"
                      alt="News single"
                    />
                  </figure>
                  <p class="mb-8">
                    {{ $t("project.wuliangsu.p4") }}
                  </p>

                  <div>
                    <hr class="w-full h-px pt-px mt-8 bg-gray-200 border-0" />
                    <div class="mt-8">
                      {{ $t("cooperation") }}
                      <a class="text-gray-900 underline" href="/contacts">{{
                        $t("connectWith")
                      }}</a
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
                        <span>{{ $t("back") }}</span>
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

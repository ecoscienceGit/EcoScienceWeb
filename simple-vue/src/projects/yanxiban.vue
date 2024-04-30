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
                {{ $t("project.training.titleInner") }}
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
                    <li class="py-1">
                      <a
                        class="flex items-center hover:underline"
                        href="#general"
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
                        <span>课程特色</span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a
                        class="flex items-center hover:underline"
                        href="#additional"
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
                        <span>往期案例</span>
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
                  >
                    {{ $t("project.training.p1") }}
                  </p>

                  <figure class="mb-8">
                    <img
                      class="w-full rounded"
                      src="/projects/images/yanxiban/px1.jpg"
                      width="768"
                      height="432"
                      alt="Blog single"
                    />
                  </figure>
                  <h3
                    id="general"
                    class="h3 text-gray-900 mb-4"
                    style="scroll-margin-top: 100px"
                  >
                    {{ $t("project.training.title1") }}
                  </h3>
                  <ul class="list-disc list-inside mb-8">
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900">{{
                        $t("project.training.p21")
                      }}</strong
                      >:{{ $t("project.training.p22") }}
                    </li>
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900">{{
                        $t("project.training.p23")
                      }}</strong
                      >{{ $t("project.training.p24") }}
                    </li>
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900">{{
                        $t("project.training.p25")
                      }}</strong
                      >{{ $t("project.training.p26") }}
                    </li>
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900">{{
                        $t("project.training.p29")
                      }}</strong
                      >{{ $t("project.training.p291") }}
                    </li>
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900">{{
                        $t("project.training.p27")
                      }}</strong
                      >{{ $t("project.training.p28") }}
                    </li>
                  </ul>
                  <h3
                    id="additional"
                    class="h3 text-gray-900 mb-4"
                    style="scroll-margin-top: 100px"
                  >
                    {{ $t("project.training.title2") }}
                  </h3>
                  <ul class="list-disc list-inside mb-8">
                    <li class="mb-1">
                      <span class="text-gray-900 underline"
                        >{{ $t("project.training.p31") }}
                      </span>
                    </li>
                    <li class="mb-1">
                      <span class="text-gray-900 underline"
                        >{{ $t("project.training.p32") }}
                      </span>
                    </li>
                    <li class="mb-1">
                      <span class="text-gray-900 underline"
                        >{{ $t("project.training.p33") }}
                      </span>
                    </li>
                    <li class="mb-1">
                      <span class="text-gray-900 underline"
                        >{{ $t("project.training.p34") }}
                      </span>
                    </li>
                  </ul>

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
  name: "Yanxueban",
};
</script>

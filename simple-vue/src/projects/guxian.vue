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
                {{ $t("project.huanghe.title") }}
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
                        <span>我们的技术亮点</span>
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
                        <span>技术创新点</span>
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
                        <span>案例动图 </span>
                      </a>
                    </li>
                    <li class="py-1">
                      <a
                        class="flex items-center hover:underline"
                        href="#conclusion"
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
                        <span>服务价值</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside> -->

              <!-- Main content -->
              <div>
                <!-- Article body -->
                <div class="text-lg text-gray-600">
                  <h3
                    id="introduction"
                    class="h3 text-gray-900 mb-4"
                    style="scroll-margin-top: 100px"
                  >
                    {{ $t("project.huanghe.title1") }}
                  </h3>
                  <p class="mb-8" style="scroll-margin-top: 100px">
                    {{ $t("project.huanghe.p11") }}
                    <strong class="font-medium text-gray-900">{{
                      $t("project.huanghe.p12")
                    }}</strong
                    >.
                    {{ $t("project.huanghe.p13") }}
                  </p>
                  <img
                    class="w-full rounded"
                    src="/projects/images/guxian/huanghe.jpg"
                    width="768"
                    height="432"
                    alt="Blog single"
                  />
                  <h3
                    id="general"
                    class="h3 text-gray-900 mb-4"
                    style="scroll-margin-top: 100px"
                  >
                    {{ $t("project.huanghe.title2") }}
                  </h3>
                  <ul class="list-disc list-inside mb-8">
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900">{{
                        $t("project.huanghe.p21")
                      }}</strong
                      >:
                      {{ $t("project.huanghe.p22") }}
                    </li>
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900">
                        {{ $t("project.huanghe.p23") }}</strong
                      >
                      {{ $t("project.huanghe.p24") }}
                    </li>
                    <li class="mb-1">
                      <strong class="font-medium text-gray-900">{{
                        $t("project.huanghe.p25")
                      }}</strong
                      >{{ $t("project.huanghe.p26") }}
                    </li>
                  </ul>
                  <h3
                    id="additional"
                    class="h3 text-gray-900 mb-4"
                    style="scroll-margin-top: 100px"
                  ></h3>
                  <span>{{ $t("project.huanghe.p31") }}</span>
                  <figure class="mb-8">
                    <video
                      class="w-full rounded"
                      controls
                      width="768"
                      height="432"
                    >
                      <source
                        src="/projects/images/guxian/Algal2year.mp4"
                        type="video/mp4"
                      />
                      您的浏览器不支持AVI视频。
                    </video>

                    <!-- 第二个AVI视频 -->
                    <span>{{ $t("project.huanghe.p32") }}</span>
                    <video
                      class="w-full rounded"
                      controls
                      width="768"
                      height="432"
                    >
                      <source
                        src="/projects/images/guxian/Chla2year.mp4"
                        type="video/mp4"
                      />
                      您的浏览器不支持AVI视频。
                    </video>
                  </figure>
                  <h3
                    id="conclusion"
                    class="h3 text-gray-900 mb-4"
                    style="scroll-margin-top: 100px"
                  >
                    {{ $t("project.huanghe.title4") }}
                  </h3>
                  <p>
                    {{ $t("project.huanghe.p41") }}
                  </p>

                  <div>
                    <hr class="w-full h-px pt-px mt-8 bg-gray-200 border-0" />
                    <div class="mt-8">
                      {{ $t("cooperation") }}
                      <a class="text-gray-900 underline" href="/contacts">{{
                        $t("connectWith")
                      }}</a>
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
  name: "Guxian",
};
</script>

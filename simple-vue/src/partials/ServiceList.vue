<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="max-w-3xl mx-auto lg:max-w-none">
          <article>
            <!-- Article header -->
            <header class="max-w-6xl mx-auto mb-20">
              <!-- Title -->
              <h1 class="h1 text-left mb-4">{{ $t("services.title") }}</h1>
            </header>

            <div class="max-w-sm mx-auto md:max-w-none">
              <!-- Services container -->
              <div
                class="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start"
              >
                <!-- 1st service type -->
                <article class="block flex flex-col h-full">
                  <header>
                    <router-link
                      to="/services-category/smart-water-management"
                      class="block mb-6"
                    >
                      <figure
                        class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded"
                      >
                        <img
                          class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                          src="../images/swm-cover.jpg"
                          width="352"
                          height="198"
                          alt="Smart Water Management cover"
                        />
                      </figure>
                    </router-link>
                    <h3
                      class="text-xl font-bold leading-snug tracking-tight mb-2"
                    >
                      <router-link
                        to="/services-category/smart-water-management"
                        class="hover:underline"
                        >{{ $t("services.smartWaterManagement.title") }}</router-link
                      >
                    </h3>
                  </header>
                  <p class="text-gray-600 grow">
                    {{ $t("services.smartWaterManagement.intro") }}
                  </p>
                </article>

                <!-- 2nd service type -->
                <article class="block flex flex-col h-full">
                  <header>
                    <router-link
                      to="/services-category/smart-water-quality"
                      class="block mb-6"
                    >
                      <figure
                        class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded"
                      >
                        <img
                          class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                          src="../images/swq-cover.jpg"
                          width="352"
                          height="198"
                          alt="Smart Water Quality cover"
                        />
                      </figure>
                    </router-link>
                    <h3
                      class="text-xl font-bold leading-snug tracking-tight mb-2"
                    >
                      <router-link
                        to="/services-category/smart-water-quality"
                        class="hover:underline"
                        >{{ $t("services.smartWaterQuality.title") }}</router-link
                      >
                    </h3>
                  </header>
                  <p class="text-gray-600 grow">
                    {{ $t("services.smartWaterQuality.intro") }}
                  </p>
                </article>

                <!-- 3rd service type -->
                <article class="block flex flex-col h-full">
                  <header>
                    <router-link
                      to="/services-category/smart-ecology"
                      class="block mb-6"
                    >
                      <figure
                        class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded"
                      >
                        <img
                          class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                          src="../images/se-cover.jpg"
                          width="352"
                          height="198"
                          alt="Smart Ecology cover"
                        />
                      </figure>
                    </router-link>
                    <h3
                      class="text-xl font-bold leading-snug tracking-tight mb-2"
                    >
                      <router-link
                        to="/services-category/smart-ecology"
                        class="hover:underline"
                        >{{ $t("services.smartEcology.title") }}</router-link
                      >
                    </h3>
                  </header>
                  <p class="text-gray-600 grow">
                    {{
                      $t("services.smartEcology.Artificial.title") +
                      "; " +
                      $t("services.smartEcology.Ecology.title") +
                      "; " +
                      $t("services.smartEcology.Combustion.title")
                    }}
                  </p>
                </article>

                <!-- 4th service type -->
                <article class="block flex flex-col h-full">
                  <header>
                    <router-link
                      to="/services-category/digital-twin"
                      class="block mb-6"
                    >
                      <figure
                        class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded"
                      >
                        <img
                          class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                          src="../images/dt-cover.jpg"
                          width="352"
                          height="198"
                          alt="Digital Twin cover"
                        />
                      </figure>
                    </router-link>
                    <h3
                      class="text-xl font-bold leading-snug tracking-tight mb-2"
                    >
                      <router-link
                        to="/services-category/digital-twin"
                        class="hover:underline"
                        >{{ $t("services.digitalTwin.title") }}</router-link
                      >
                    </h3>
                  </header>
                  <p class="text-gray-600 grow">
                    {{
                      $t("services.digitalTwin.systems.title") +
                      "; " +
                      $t("services.digitalTwin.cloud.title")
                    }}
                  </p>
                </article>

                <!-- 5th service type -->
                <article class="block flex flex-col h-full">
                  <header>
                    <router-link
                      to="/services-category/ai-transformation"
                      class="block mb-6"
                    >
                      <figure
                        class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded"
                      >
                        <img
                          class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                          src="../images/ai-cover.jpg"
                          width="352"
                          height="198"
                          alt="AI Transformation cover"
                        />
                      </figure>
                    </router-link>
                    <h3
                      class="text-xl font-bold leading-snug tracking-tight mb-2"
                    >
                      <router-link
                        to="/services-category/ai-transformation"
                        class="hover:underline"
                        >{{ $t("services.aiTransformation.title") }}</router-link
                      >
                    </h3>
                  </header>
                  <p class="text-gray-600 grow">
                    {{
                      $t("services.aiTransformation.intro")
                    }}</p>
                </article>

                <!-- 6th service type -->
                <article class="block flex flex-col h-full">
                  <header>
                    <router-link
                      to="/services-category/social-media-ecology"
                      class="block mb-6"
                    >
                      <figure
                        class="relative h-0 pb-9/16 overflow-hidden translate-z-0 rounded"
                      >
                        <img
                          class="absolute inset-0 w-full h-full object-cover transform scale-105 hover:-translate-y-1 transition duration-700 ease-out"
                          src="../images/sme-cover.jpg"
                          width="352"
                          height="198"
                          alt="social media ecology cover"
                        />
                      </figure>
                    </router-link>
                    <h3
                      class="text-xl font-bold leading-snug tracking-tight mb-2"
                    >
                      <router-link
                        to="/services-category/social-media-ecology"
                        class="hover:underline"
                        >{{ $t("services.socialMediaEcology.title") }}</router-link
                      >
                    </h3>
                  </header>
                  <p class="text-gray-600 grow">
                    {{
                      $t("services.socialMediaEcology.intro")
                    }}</p>
                </article>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ServiceList",
};
</script>

<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Page header -->
        <div class="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
          <h1 class="h1 mb-4">{{ $t("projects") }}</h1>
          <p class="text-xl text-gray-600">{{ $t("slogon") }}</p>
        </div>

        <!-- Main content -->
        <div class="md:flex md:justify-between">
          <!-- Articles container -->
          <div class="md:grow -mt-4">
            <article
              v-for="project in projects"
              :key="project.id"
              class="flex flex-col md:flex-row items-center py-4 border-b border-gray-200"
            >
              <div
                class="flex flex-col items-center md:flex-row md:items-center w-full"
              >
                <router-link :to="`/project-post/${project.id}`" class="block">
                  <img
                    :src="project.imageUrl"
                    :alt="project.title"
                    class="w-48 h-32 md:w-64 md:h-48 rounded-lg shadow-md"
                  />
                </router-link>
                <div class="md:ml-6 text-center md:text-left">
                  <header>
                    <h2 class="text-xl font-semibold mb-2">
                      <router-link
                        :to="`/project-post/${project.id}`"
                        class="hover:underline text-blue-600"
                      >
                        {{ project.title }}
                      </router-link>
                    </h2>
                  </header>
                  <footer class="text-sm flex items-center mt-4">
                    <div>
                      <span class="text-gray-600">{{ project.summary }} </span>
                    </div>
                  </footer>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectsList",
  data() {
    return {
      // 示例项目数据
      projects: [
        {
          id: "guxian",
          title: this.$t("project.huanghe"),
          summary: "合作单位： 陕西思益清源科技公司",
          imageUrl: "/projects/images/guxian/cover.jpg",
        },
        {
          id: "wuliangsuhai",
          title: this.$t("project.wuliangsu"),
          summary: "合作单位： 陕西思益清源科技公司",
          imageUrl: "/projects/images/wuliangsuhai/cover.jpg",
        },
        {
          id: "nanshuibeidiao",
          title: this.$t("project.nanshui"),
          summary: "合作单位：南阳师范学院",
          imageUrl: "/projects/images/nanshuibeidiao/cover.jpg",
        },
        {
          id: "yanxiban",
          title: this.$t("project.training"),
          summary: "合作单位：云南大学；长江委设计院；黄河水资源保护科学研究院",
          imageUrl: "/projects/images/yanxiban/cover.jpg",
        },
        {
          id: "competition",
          title: this.$t("project.models"),
          summary: "合作单位：湖北工业大学计算机学院；加拿大工程师团队",
          imageUrl: "/projects/images/competition/cover.jpg",
        },
        {
          id: "learningWithUs",
          title: this.$t("project.consultation"),
          summary: "",
          imageUrl: "/projects/images/learningWithUs/cover.jpg",
        },
      ],
    };
  },
};
</script>

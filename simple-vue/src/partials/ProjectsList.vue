<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <!-- Page header -->
        <div class="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
          <h1 class="h1 mb-4">项目案例</h1>
          <p class="text-xl text-gray-600">滴水成河 聚沙成塔</p>
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
              <div class="md:flex md:items-center">
                <router-link :to="`/project-post/${project.id}`" class="block">
                  <img
                    :src="project.imageUrl"
                    :alt="project.title"
                    class="w-48 h-32 md:w-64 md:h-48 rounded-lg shadow-md"
                  />
                </router-link>
                <div class="md:ml-6">
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
                  <div class="text-lg text-gray-600 mb-4">
                    {{ project.summary }}
                  </div>
                  <footer class="text-sm">
                    <span class="text-gray-600">{{ project.date }}</span>
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
          title: "黄河流域古贤水利枢纽工程生态评估",
          summary: "",
          imageUrl: "/projects/images/guxian/cover.jpg",
          date: "2023年1月-2023年3月",
        },
        {
          id: "wuliangsuhai",
          title: "乌梁素海水动力模拟",
          summary: "",
          imageUrl: "/projects/images/wuliangsuhai/cover.jpg",
          date: "2023年1月-2023年3月",
        },
        {
          id: "nanshuibeidiao",
          title: "湿沉降对南水北调中线工程干渠水质影响模拟研究",
          summary: "",
          imageUrl: "/projects/images/nanshuibeidiao/cover.jpg",
          date: "2023年1月-2023年3月",
        },
        {
          id: "yanxiban",
          title: "研习班",
          summary: "",
          imageUrl: "/projects/images/yanxiban/cover.jpg",
          date: "2023年1月-2023年3月",
        },
        {
          id: "w2",
          title: "W2模型论坛",
          summary: "",
          imageUrl: "/projects/images/w2/cover.jpg",
          date: "2023年1月-2023年3月",
        },
        {
          id: "competition",
          title: "模型竞赛",
          summary: "",
          imageUrl: "/projects/images/competition/cover.jpg",
          date: "2023年1月-2023年3月",
        },
        {
          id: "learningWithUs",
          title: "在线咨询",
          summary: "",
          imageUrl: "/projects/images/learningWithUs/cover.jpg",
          date: "2023年1月-2023年3月",
        },
      ],
    };
  },
};
</script>

<template>
  <footer>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 py-4 md:py-12 border-t border-gray-200">
        <div class="lg:col-span-2">
          <div class="mb-2 mt-4">
            <router-link to="/" aria-label="Cruip">
              <router-link to="/" class="flex items-center justify-center" aria-label="Cruip">
                <img src="../images/EcoSci_icon_2.png" alt="Icon" class="w-32 h-26" />
              </router-link>
            </router-link>
          </div>
        </div>

        <div class="lg:col-span-2 flex flex-col items-center justify-center">
          <img src="../images/wechat_qr.png" alt="Icon" class="w-24 h-24 mb-1" />
          <p class="text-xs text-gray-600 mb-2">
            {{ $t("wechatOfficialAccount") }}
          </p>
          <p class="text-xs text-gray-600 mb-2">
            {{ $t("ourEmail", { account: "ecosci", domain: "outlook.com" }) }}
          </p>
        </div>
      </div>

      <!-- Bottom area -->
      <div class="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">
        <!-- Copyrights note -->
        <div class="text-sm text-gray-600 mr-4">
          &copy; {{ $t("copyright") }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

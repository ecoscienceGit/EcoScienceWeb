<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20 border-t border-gray-200">

        <!-- Section header -->
        <div class="max-w-6xl mx-auto text-left pb-2 md:pb-2">
          <h2 class="h2 mb-4">{{ $t('about.contactInfo') }}</h2>
          <p class="text-xl text-gray-600"></p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4 md:py-12">
          <!-- emails -->
          <div class="lg:col-span-1 mb-4 mr-8">
            <p class="text-xl font-bold text-gray-900 mb-2">{{ $t('about.contact.business') }}</p>
            <p class="text-lg text-blue-600 mb-2">ecosci@outlook.com</p>
          </div>

          <!-- wechat-->
          <div class="lg:col-span-1">
            <p class="text-xl font-bold text-gray-900 mb-4">{{ $t('about.contact.online') }}</p>

            <div class="inline-flex flex-col items-center rounded border border-gray-200 bg-gray-100">
              <img
                src="../images/wechat_qr.png"
                alt="Icon"
                class="w-32 h-32 mb-1 mt-8"
              />
              <p class="text-sm text-gray-600 mt-1 mb-1">{{ $t('about.contact.wechatScan') }}</p>
              <p class="text-sm text-gray-600 mb-8 mr-8 ml-8">{{ $t('about.contact.followWechat') }}</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutContacts',
}
</script>
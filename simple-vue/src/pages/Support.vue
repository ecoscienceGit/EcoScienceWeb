<template>
  <div
    class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip"
  >
    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <!-- Contact section -->
      <section>
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">
            <!-- Section header -->
            <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 class="h1">
                Have a question about Simple? Contact us directly
              </h1>
            </div>

            <!-- Contact form -->
            <form class="max-w-xl mx-auto">
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label
                    class="block text-gray-800 text-sm font-medium mb-1"
                    for="first-name"
                    >First Name <span class="text-red-600">*</span></label
                  >
                  <input
                    id="first-name"
                    type="text"
                    class="form-input w-full text-gray-800"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block text-gray-800 text-sm font-medium mb-1"
                    for="last-name"
                    >Last Name <span class="text-red-600">*</span></label
                  >
                  <input
                    id="last-name"
                    type="text"
                    class="form-input w-full text-gray-800"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label
                    class="block text-gray-800 text-sm font-medium mb-1"
                    for="email"
                    >Email <span class="text-red-600">*</span></label
                  >
                  <input
                    id="email"
                    type="email"
                    class="form-input w-full text-gray-800"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label
                    class="block text-gray-800 text-sm font-medium mb-1"
                    for="subject"
                    >Subject <span class="text-red-600">*</span></label
                  >
                  <input
                    id="subject"
                    type="text"
                    class="form-input w-full text-gray-800"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label
                    class="block text-gray-800 text-sm font-medium mb-1"
                    for="country"
                    >Country</label
                  >
                  <select id="country" class="form-select w-full text-gray-500">
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Germany</option>
                  </select>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label
                    class="block text-gray-800 text-sm font-medium mb-1"
                    for="message"
                    >Message</label
                  >
                  <textarea
                    id="message"
                    rows="4"
                    class="form-textarea w-full text-gray-800"
                    placeholder="Write your message"
                  ></textarea>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mt-4">
                <div class="w-full px-3">
                  <button
                    class="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                  >
                    Send
                  </button>
                </div>
              </div>
              <div class="text-sm text-gray-600 mt-4">
                By clicking "send" you consent to allow Simple to store and
                process the personal information submitted above and agree to
                our <a class="underline" href="#0">terms and conditions</a> as
                well as our <a class="underline" href="#0">Privacy Policy</a>.
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>

    <!-- Site footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "./../partials/Header.vue";

import Footer from "./../partials/Footer.vue";

export default {
  name: "Support",
  components: {
    Header,
    Footer,
  },
};
</script>
